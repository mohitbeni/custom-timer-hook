// import { useEffect } from "react";
import useTimer from "./hooks/useTimer";
import "./styles.css";

export default function App() {
  const { isRunning, start, stop, seconds } = useTimer(10);

  // useEffect(() => {
  //   start();
  // }, [start]);

  return (
    <div className="App">
      <h1>Custom useTimer Hook</h1>
      <h2>{isRunning ? seconds : "No Timer Running"}</h2>
      <div className="btns">
        <button onClick={start} disabled={isRunning}>
          Start Timer
        </button>
        <button onClick={stop} disabled={!isRunning}>
          Stop Timer
        </button>
      </div>
    </div>
  );
}
