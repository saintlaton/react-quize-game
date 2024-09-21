import { useState, useEffect } from "react";
import LevelUpPopup from "./LevelUpPopup";

function Progress({ index, numQuestions, points, maxPossiblePoints, answer }) {
  const [showLevelUp, setShowLevelUp] = useState(false);
  const [previousPoints, setPreviousPoints] = useState(0);

  useEffect(() => {
    // Trigger the Level Up popup only when moving to a new level
    if (
      (previousPoints < 150 && points >= 150) ||
      (previousPoints < 250 && points >= 250) ||
      (previousPoints < 280 && points === 280)
    ) {
      setShowLevelUp(true);
      setTimeout(() => setShowLevelUp(false), 5000); // Hide after 1.5 seconds
    }
    setPreviousPoints(points);
  }, [points, previousPoints]);

  return (
    <>
      <div className="skills">
        <h3>
          You are : &nbsp;
          {points === 280 ? (
            <>
              <span className="skill-animate">React Unstoppable 🏆</span>
              <div className="score-progress--div">
                <p className="score-progress">(You just Broke the limit!!!)</p>
              </div>
            </>
          ) : points >= 250 ? (
            <>
              <span className="skill-animate">React Expert 🤯</span>
              <div className="score-progress--div">
                <p className="score-progress">(Get 280 score To Up skill)</p>
              </div>
            </>
          ) : points >= 150 ? (
            <>
              <span className="skill-animate">The Real React Dev 👨‍💻</span>
              <div className="score-progress--div">
                <p className="score-progress">(Get 250 score To Up skill)</p>
              </div>
            </>
          ) : (
            <>
              <span className="skill-animate">React Baby 🐣</span>
              <div className="score-progress--div">
                <p className="score-progress">(Get 150 score To Up skill)</p>
              </div>
            </>
          )}
        </h3>
      </div>

      {showLevelUp && <LevelUpPopup />}

      <header className="progress">
        <progress max={maxPossiblePoints} value={points} />
        <p>
          Question <strong>{index + 1}</strong> / {numQuestions}
        </p>
        <p>
          Score :<strong>{points}</strong> / {maxPossiblePoints}
        </p>
      </header>
    </>
  );
}

export default Progress;
