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
  const currentDate = new Date().toDateString();
  return (
    <div>
      <div>
        <button className="numButtons">-</button>
        <p className="labelText">Step: {step}</p>
        <button className="numButtons">+</button>
      </div>
      <div>
        <button className="numButtons">-</button>
        <p className="labelText">Count: {count}</p>
        <button className="numButtons">+</button>
      </div>

      <p className="outputText">
        {count} days from today is {currentDate}
      </p>
    </div>
  );
}
