import { useState, useEffect } from "react";
import Option from "../Option/Option";

function MemoryQuestion({ id, singleQuestion, handleClick }) {
  const { correct_answer, incorrect_answers, question, words } = singleQuestion;
  const [showWords, setShowWords] = useState(true);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setShowWords(false);
      setOptions(
        incorrect_answers.concat(correct_answer).sort(() => Math.random() - 0.5)
      );
    }, 3000);

    return () => clearTimeout(timer);
  }, [incorrect_answers, correct_answer]);

  return (
    <section>
      <div className="flex items-start space-x-3 text-base md:text-lg mb-10">
        <h3 className="text-gray-800 font-semibold text-center">{id}.</h3>
        <h3 className="text-gray-800 font-semibold">{question}</h3>
      </div>

      {showWords ? (
        <div className="text-center text-xl font-bold">
          {words.map((word, index) => (
            <span key={index} className="mx-2">
              {word}
            </span>
          ))}
        </div>
      ) : (
        options.map((opt, i) => (
          <Option
            key={i}
            value={opt}
            idx={i}
            handleClick={handleClick}
            trueAnswer={correct_answer}
          />
        ))
      )}
    </section>
  );
}

export default MemoryQuestion;