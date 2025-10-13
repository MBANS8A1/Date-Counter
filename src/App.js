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
        <button className="numButtons" onClick={decreaseStep}>
          -
        </button>
        <p className="labelText">Step: {step}</p>
        <button className="numButtons" onClick={increaseStep}>
          +
        </button>
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
            : `${count} day(s) ago was `}
        </span>
        <span>
          {new Date(
            currentDate.setDate(currentDate.getDate() + count)
          ).toDateString()}
        </span>
      </p>
    </div>
  );
}
