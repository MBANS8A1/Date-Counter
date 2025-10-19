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
      <div>
        {/*A place for the step slider */}
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(e.target.value)}
        />

        <p className="labelText">Step: {step}</p>
      </div>
      <div>
        <button className="numButtons" onClick={decreaseCount}>
          -
        </button>
        <p className="labelText">Count: {count}</p>
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
    </div>
  );
}
