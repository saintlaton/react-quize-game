function Options({ question, dispatch, answer }) {
  const hasAnswer = answer !== null;

  return (
    <div className="options">
      {question.options.map((option, index) => {
        return (
          <button
            className={`btn btn-option ${index === answer ? "answer" : ""} ${
              hasAnswer
                ? index === question.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            onClick={() => {
              dispatch({ type: "newAnswer", payload: index });
            }}
            disabled={hasAnswer}
            key={option}
          >
            {option}
            {hasAnswer && (
              <span>{index === question.correctOption ? "✅" : "❌"}</span>
            )}
          </button>
        );
      })}
    </div>
  );
}

export default Options;
