import useQuestionStore from "../../store/zustand";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AnimateProvider from "../../components/AnimateProvider/AnimateProvider";
import Question from "../../components/Questions/Questions";
import { Line } from 'react-chartjs-2'; // Changed from Bar to Line
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,  // Changed from BarElement
  PointElement, // Add this
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,  // Changed from BarElement
  PointElement, // Add this
  Title,
  Tooltip,
  Legend
);

function Success() {
  const {
    trueAnswer,
    falseAnswer,
    resetQuestion,
    setTimeStamp,
    question: allQuestion,
    saveScore, // Add this
    scoreHistory // Add this
  } = useQuestionStore();
  const navigate = useNavigate();
  const score = (trueAnswer * 100) / 5;
  const indxColor =
    score >= 80 ? "#10b981" : score >= 60 ? "#F59E0B" : "#dc2626";

  useEffect(() => {
    setTimeStamp(0);
    saveScore(); // Call this to save the score
  }, []);

  const handleClick = () => {
    resetQuestion();
    navigate("/");
  };

  // Prepare data for the chart
  const chartData = {
    labels: scoreHistory.slice(-10).map(score => 
      new Date(score.date).toLocaleDateString()
    ),
    datasets: [
      {
        label: 'Quiz Scores',
        data: scoreHistory.slice(-10).map(score => score.score),
        borderColor: '#F97316', // Orange color to match theme
        backgroundColor: 'rgba(249, 115, 22, 0.5)', // Semi-transparent orange
        tension: 0.3, // Makes the line slightly curved
        fill: true,
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
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

  return (
    <AnimateProvider className="flex flex-col space-y-10 md:max-w-xl md:mx-auto">
      <h3 className="text-lg text-center text-neutral-900 font-bold md:text-xl">
        Your Final score is
      </h3>

      <h1
        style={{
          background: indxColor,
        }}
        className={`text-5xl font-bold mx-auto p-5 rounded-full bg-red-500 md:text-6xl text-neutral-100`}
      >
        {score}
      </h1>

      <div className="text-xs md:text-sm text-neutral-600 font-medium flex flex-col space-y-1">
        <p className="flex justify-between">
          Correct Answer <span className="text-green-600">{trueAnswer}</span>
        </p>
        <p className="flex justify-between">
          Wrong Answer <span className="text-red-600">{falseAnswer}</span>
        </p>
        <p className="flex justify-between">
          Answer Submitted{" "}
          <span className="text-purple-600">{trueAnswer + falseAnswer}</span>
        </p>
      </div>

      <button
        onClick={handleClick}
        className="grid place-items-center text-neutral-50 bg-orange-500 rounded-full py-2 hover:text-neutral-50 text-sm font-semibold"
      >
        Back to dashboard
      </button>

      {/* Summary */}
      <h3 className="text-center text-neutral-600 font-semibold md:text-lg pt-[100px]">
        Answer
      </h3>
      {allQuestion.map((question, i) => (
        <Question
          key={i}
          singleQuestion={question}
          id={i + 1}
          summary={true}
          trueAnswer={question.correct_answer}
        />
      ))}

      {/* Add chart before the score history list */}
      <div className="w-full bg-white p-4 rounded-lg shadow">
        <Line data={chartData} options={chartOptions} />
      </div>

      {/* Add score history section */}
      <div className="mt-10">
        <h3 className="text-lg font-bold mb-4">Previous Scores</h3>
        <div className="space-y-4">
          {scoreHistory.slice().reverse().map((score, index) => (
            <div 
              key={index}
              className="bg-white p-4 rounded-lg shadow"
            >
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
                     }}
                  >
                    {score.score}%
                  </p>
                  <p className="text-sm text-gray-600">
                    {score.correct} correct, {score.wrong} wrong
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimateProvider>
  );
}

export default Success;
