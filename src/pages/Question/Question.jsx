import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useQuestionStore from "../../store/zustand";
import AnimateProvider from "../../components/AnimateProvider/AnimateProvider";
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
import MidnightTimer from '../../components/MidnightTimer';

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

function Question() {
  const { fetchQuestion, question: questionData, scoreHistory } = useQuestionStore();
  const { search } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!questionData.length) {
      fetchQuestion(search);
    }
  }, [questionData]);

  if (!questionData.length) return <p>Loading...</p>;

  // Separate scores by category
  const memoryScores = scoreHistory.filter(score => score.category === "Memory");
  const attentionScores = scoreHistory.filter(score => score.category === "Attention");
  const problemSolvingScores = scoreHistory.filter(score => score.category === "Problem Solving");
  const reactionSpeedScores = scoreHistory.filter(score => score.category === "Vocabulary");

  // Chart configuration
  const chartData = {
    labels: scoreHistory.slice(-10).map(score => 
      new Date(score.date).toLocaleDateString()
    ),
    datasets: [
      {
        label: 'Memory Tests',
        data: memoryScores.slice(-10).map(score => score.score),
        borderColor: '#3B82F6', // Blue
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        tension: 0.3,
        fill: true,
      },
      {
        label: 'Attention Tests',
        data: attentionScores.slice(-10).map(score => score.score),
        borderColor: '#F97316', // Orange
        backgroundColor: 'rgba(249, 115, 22, 0.5)',
        tension: 0.3,
        fill: true,
      },
      {
        label: 'Problem Solving Tests',
        data: problemSolvingScores.slice(-10).map(score => score.score),
        borderColor: '#22C55E', // Green
        backgroundColor: 'rgba(34, 197, 94, 0.5)',
        tension: 0.3,
        fill: true,
      },
      {
        label: 'Vocabulary', 
        data: reactionSpeedScores.slice(-10).map(score => score.score),
        borderColor: '#8B5CF6', // Violet
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
    if (score >= 80) return "Great job! Focus on the few questions you missed to achieve mastery.";
    if (score >= 70) return "Good progress! Review the topics you're unsure about and try again.";
    if (score >= 60) return "You're on the right track. Make notes of challenging questions and study those areas.";
    if (score >= 50) return "Keep going! Consider reviewing the fundamentals before attempting again.";
    return "Don't give up! Try an easier difficulty level and build your confidence step by step.";
  };

  return (
    <AnimateProvider className="max-w-xl mx-auto">
      <h1 className="text-base md:text-lg font-semibold mb-5 text-orange-900">
        Cognitive Analysis
      </h1>

      {/* Add the MidnightTimer component here, before the quiz info */}
      <MidnightTimer />

      <div className="flex flex-col text-gray-900 space-y-3 text-xs md:text-sm">
        <div className="flex space-x-5">
          <p className="min-w-[170px]">Number of questions </p>
          <p className="font-bold">{questionData.length}</p>
        </div>

        <div className="flex space-x-5">
          <p className="min-w-[170px]">Category </p>
          <p className="font-bold text-orange-500">{questionData[0].category}</p>
        </div>

        <div className="flex space-x-5">
          <p className="min-w-[170px] ">Difficulty</p>
          <p className="font-bold capitalize text-lime-600">
            {questionData[0].difficulty}
          </p>
        </div>

        <div className="flex space-x-5">
          <p className="min-w-[170px]">Time </p>
          <p className="font-bold">3 mins.</p>
        </div>
      </div>

      {/* Add average score section */}
      <div className="mt-8 mb-4 p-4 bg-white rounded-lg shadow">
        <h3 className="text-lg font-bold mb-2">Recent Performance</h3>
        {scoreHistory.length > 0 && (
          <>
            {(() => {
              const recentScores = scoreHistory.slice(-10); // Changed from -5 to -10
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
          </>
        )}
        {scoreHistory.length === 0 && (
          <p className="text-sm text-gray-600">
            Complete your first test to see your performance metrics
          </p>
        )}
      </div>

      {/* Add chart section */}
      <div className="mt-10 w-full bg-white p-4 rounded-lg shadow">
        <Line data={chartData} options={chartOptions} />
      </div>

      {/* Add previous scores section */}
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

      <button
        disabled={!questionData}
        onClick={() => {
          navigate(`/question/1`);
        }}
        className="flex w-full rounded-full bg-orange-500 cursor-pointer disabled:bg-orange-500/50 disabled:cursor-not-allowed p-1 justify-center font-semibold md:font-bold text-base md:text-lg text-center mt-10 text-white hover:bg-orange-500"
      >
        Start
      </button>
    </AnimateProvider>
  );
}

export default Question;
