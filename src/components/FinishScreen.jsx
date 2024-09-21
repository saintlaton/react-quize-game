function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;

  return (
    <>
      <div className="result">
        <p className="result-skill">
          You are : &nbsp;
          {points === 280
            ? "React Unstopable 🏆"
            : points >= 250
            ? "React Expert 🤯"
            : points >= 150
            ? "The Real React Dev 👨‍💻"
            : "React Baby 🐣"}
        </p>
        <p>
          you scored <strong>{points}</strong> out of {maxPossiblePoints} (
          {Math.ceil(percentage)}%)
        </p>
      </div>
      <p className="highscore">(High score : {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </>
  );
}

export default FinishScreen;
