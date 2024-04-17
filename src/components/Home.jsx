import React, { useState } from "react";
import Game from "./Game";
import Score from "./Score";

const Home = ({ setWelcome }) => {
  const [score, setScore] = useState(0);
  const [view, setView] = useState(false);

  return (
    <>
      {view ? (
        <Score score={score} />
      ) : (
        <Game
          setWelcome={setWelcome}
          setScore={setScore}
          score={score}
          setView={setView}
        />
      )}
    </>
  );
};

export default Home;
