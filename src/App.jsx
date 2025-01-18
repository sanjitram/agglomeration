import { Types, Level } from "./constant";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import useQuestionStore from "./store/zustand";
import AnimateProvider from "./components/AnimateProvider/AnimateProvider";
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import MidnightTimer from './components/MidnightTimer';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

function App() {
  const [type, setType] = useState(Types[0].id);
  const [level, setLevel] = useState(Level[0]);
  const { question, scoreHistory } = useQuestionStore();
  const navigate = useNavigate();

  if (question.length) return <Navigate to={"/question"} />;

  // Separate scores by category
  const memoryScores = scoreHistory.filter(score => score.category === "Memory");
  const attentionScores = scoreHistory.filter(score => score.category === "Attention");
  const problemSolvingScores = scoreHistory.filter(score => score.category === "Problem Solving");
  const reactionSpeedScores = scoreHistory.filter(score => score.category === "Vocabulary");

  // Calculate averages for each category
  const calculateAverage = (scores) => {
    if (scores.length === 0) return 0;
    return scores.reduce((acc, curr) => acc + curr.score, 0) / scores.length;
  };

  const averages = {
    memory: calculateAverage(memoryScores.slice(-10)),
    attention: calculateAverage(attentionScores.slice(-10)),
    problemSolving: calculateAverage(problemSolvingScores.slice(-10)),
    reactionSpeed: calculateAverage(reactionSpeedScores.slice(-10))
  };

  // Chart configuration
  const chartData = {
    labels: scoreHistory.slice(-10).map(score => 
      new Date(score.date).toLocaleDateString()
    ),
    datasets: [
      {
        label: 'Memory Tests',
        data: memoryScores.slice(-10).map(score => score.score),
        borderColor: '#3B82F6',
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        tension: 0.3,
        fill: true,
      },
      {
        label: 'Attention Tests',
        data: attentionScores.slice(-10).map(score => score.score),
        borderColor: '#F97316',
        backgroundColor: 'rgba(249, 115, 22, 0.5)',
        tension: 0.3,
        fill: true,
      },
      {
        label: 'Problem Solving Tests',
        data: problemSolvingScores.slice(-10).map(score => score.score),
        borderColor: '#22C55E',
        backgroundColor: 'rgba(34, 197, 94, 0.5)',
        tension: 0.3,
        fill: true,
      },
      {
        label: 'Vocabulary',
        data: reactionSpeedScores.slice(-10).map(score => score.score),
        borderColor: '#8B5CF6',
        backgroundColor: 'rgba(139, 92, 246, 0.5)',
        tension: 0.3,
        fill: true,
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        align: 'start',
        labels: {
          padding: 20,
          boxWidth: 30
        }
      },
      title: {
        display: true,
        text: 'Score History'
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: 'Score (%)'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Date'
        }
      }
    }
  };

  const getScoreAdvice = (score) => {
    if (score >= 90) return "Outstanding! You've mastered this topic. Try increasing the difficulty level!";
    if (score >= 70) return "Great job! Focus on the few questions you missed to achieve mastery.";
    if (score >= 60) return "Good progress! Review the topics you're unsure about and try again.";
    if (score >= 50) return "You're on the right track. Keep going.";
    if (score >= 30) return "Keep going! Consider reviewing the fundamentals before attempting again.";
    return "Very poor. Review your cognitive abilities";
  };

  const handleBegin = () => {
    const category = Types.find(t => t.id === Number(type))?.name;
    const query = `?category=${category}&difficulty=${level}&amount=5`;
    navigate(`/question${query}`, { replace: false });
  };

  return (
    <AnimateProvider className="flex flex-col text-sm md:mx-auto md:max-w-xl">
      <h1 className="text-lg font-bold text-slate-800 mb-10">
        Welcome to <span>MindMeld</span>
      </h1>

      <MidnightTimer />

      {/* Test Selection & Start Button Section */}
      <div className="mb-10">
        <h3 className="text-xs md:text-sm text-neutral-600 font-semibold mb-3">
          Select type{" "}
        </h3>
        <select
          className="w-full bg-neutral-50 ring-[1px] ring-gray-200 rounded-lg px-1 py-2 md:py-3 text-xs md:text-sm focus:border-none focus:outline-none focus:ring-[1px] focus:ring-orange-500 text-gray-700 font-medium mb-5"
          name="type"
          onChange={(e) => setType(e.target.value)}
        >
          {Types.map((type) => (
            <option value={type.id} key={type.id}>
              {type.name}
            </option>
          ))}
        </select>

        <h3 className="text-xs md:text-sm text-neutral-600 font-semibold mb-3">
          Select difficulty
        </h3>
        <select
          className="w-full bg-neutral-50 ring-[1px] ring-gray-200 rounded-lg px-1 py-2 md:py-3 text-xs md:text-sm focus:border-none focus:outline-none focus:ring-[1px] focus:ring-orange-500 text-gray-700 font-medium capitalize"
          name="level"
          onChange={(e) => setLevel(e.target.value)}
        >
          {Level.map((level) => (
            <option value={level} key={level}>
              {level}
            </option>
          ))}
        </select>

        <button
          className="w-full rounded-full bg-orange-500 p-1 py-2 md:py-2 justify-center font-semibold md:font-bold text-sm md:text-base text-center mt-5 hover:bg-neutral-50 hover:text-orange-500 transition text-white"
          onClick={handleBegin}
        >
          Begin Test
        </button>
      </div>

      {/* Dashboard Content */}
      {scoreHistory.length > 0 && (
        <div className="mt-8">
          <div className="mt-8 mb-4 p-4 bg-white rounded-lg shadow">
            <h3 className="text-lg font-bold mb-2">Recent Performance</h3>
            {(() => {
              const recentScores = scoreHistory.slice(-10);
              const average = recentScores.reduce((acc, curr) => acc + curr.score, 0) / recentScores.length;
              
              const getGrade = (avg) => {
                if (avg >= 80) return { text: 'Extraordinary', color: '#059669' };
                if (avg >= 60) return { text: 'Great', color: '#10B981' };
                if (avg >= 40) return { text: 'Average', color: '#F59E0B' };
                if (avg >= 20) return { text: 'Bad', color: '#EF4444' };
                return { text: 'Poor', color: '#991B1B' };
              };

              const grade = getGrade(average);

              return (
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-600">
                      Average of last {recentScores.length} {recentScores.length === 1 ? 'quiz' : 'quizzes'}:
                    </p>
                    <p className="text-3xl font-bold mt-1" style={{ color: grade.color }}>
                      {average.toFixed(1)}%
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Grade</p>
                    <p className="text-2xl font-bold mt-1" style={{ color: grade.color }}>
                      {grade.text}
                    </p>
                  </div>
                </div>
              );
            })()}
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {Object.entries(averages).map(([category, avg]) => (
              <div key={category} className="bg-white p-4 rounded-lg shadow">
                <h4 className="text-sm font-semibold text-gray-600 capitalize mb-2">
                  {category.replace(/([A-Z])/g, ' $1').trim()}
                </h4>
                <p className="text-2xl font-bold" style={{
                  color: avg >= 80 ? '#10b981' : 
                         avg >= 60 ? '#F59E0B' : '#dc2626'
                }}>
                  {avg.toFixed(1)}%
                </p>
                <p className="text-xs text-gray-500">
                  Last {category === 'memory' ? memoryScores.length :
                        category === 'attention' ? attentionScores.length :
                        category === 'problemSolving' ? problemSolvingScores.length :
                        reactionSpeedScores.length} tests
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 w-full bg-white p-4 rounded-lg shadow">
            <Line data={chartData} options={chartOptions} />
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-bold mb-4">Previous Scores</h3>
            <div className="space-y-4">
              {scoreHistory.slice().reverse().map((score, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold">{score.category}</p>
                      <p className="text-sm text-gray-600">
                        Difficulty: {score.difficulty}
                      </p>
                      <p className="text-sm text-gray-600">
                        {new Date(score.date).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold" 
                         style={{
                           color: score.score >= 80 ? '#10b981' : 
                                  score.score >= 60 ? '#F59E0B' : '#dc2626'
                         }}>
                        {score.score}%
                      </p>
                      <p className="text-sm mt-1"
                         style={{
                           color: score.score >= 80 ? '#10b981' : 
                                  score.score >= 60 ? '#F59E0B' : '#dc2626'
                         }}>
                        {getScoreAdvice(score.score)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </AnimateProvider>
  );
}

export default App;
