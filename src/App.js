import { useState } from "react";
import "./styles.css";
function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + count);

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  function increaseCount() {
    setCount((c) => c + step);
  }
  function decreaseCount() {
    setCount((c) => c - step);
  }
  function increaseStep() {
    setStep((st) => st + 1);
  }
  function decreaseStep() {
    setStep((st) => st - 1);
  }
  return (
    <div>
      <div className="rangeContainer">
        {/*A place for the step slider */}
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span className="labelText">Step: {step}</span>
      </div>
      <div>
        <button className="numButtons" onClick={decreaseCount}>
          -
        </button>
        <input
          type="text"
          id="countField"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button className="numButtons" onClick={increaseCount}>
          +
        </button>
      </div>

      <p className="outputText">
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} day(s) from today is `
            : `${Math.abs(count)} day(s) ago was `}
        </span>
        <span>{currentDate.toDateString()}</span>
      </p>
      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}
