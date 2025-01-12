import react, {useState} from "react";
import useToggleState from "./hooks/useToggleState.jsx";
import "./MoodClicker.css";

const MoodClicker = () => {
  const [isHappy, toggleIsHappy] = useToggleState();
  const [isDarkMode, toggleIsDarkMode] = useToggleState();

  return (
    <div className={isDarkMode ? "Clicker-dark" : "Clicker-light"}>
      <h1>{isHappy ? "HAPPY" : "SAD"}</h1>
      <button onClick={toggleIsHappy}>CHANGE MOOD</button>
      <button onClick={toggleIsDarkMode}>CHANGE MODE</button>
    </div>
  );
};

export default MoodClicker;