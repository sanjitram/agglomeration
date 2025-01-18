import Option from "../Option/Option";

function AttentionQuestion({ id, singleQuestion, handleClick }) {
  const { correct_answer, incorrect_answers, question, image } = singleQuestion;
  const options = incorrect_answers.concat(correct_answer).sort(() => Math.random() - 0.5);

  return (
    <section>
      <div className="flex items-start space-x-3 text-base md:text-lg mb-10">
        <h3 className="text-gray-800 font-semibold text-center">{id}.</h3>
        <h3 className="text-gray-800 font-semibold">{question}</h3>
      </div>

      <div className="text-center mb-5">
        <img src={image} alt="Attention Question" className="mx-auto" />
      </div>

      {options.map((opt, i) => (
        <Option
          key={i}
          value={opt}
          idx={i}
          handleClick={handleClick}
          trueAnswer={correct_answer}
        />
      ))}
    </section>
  );
}

export default AttentionQuestion;