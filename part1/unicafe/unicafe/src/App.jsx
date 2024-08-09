/* eslint-disable react/prop-types */
import { useState } from "react";

const StatisticsLine = (props) => {
  return (
    <div>
      <p>
        {props.text} {props.value}
      </p>
    </div>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const totalCounter = good + bad + neutral;
  const conditionFlag = totalCounter === 0;
  const average = (good + bad + neutral) / 3;
  const goodAverage = (good / totalCounter) * 100;
  return (
    <div>
      {conditionFlag ? (
        <h1>No feedback given</h1>
      ) : (
        <div>
          <h1>statistics</h1>
          <StatisticsLine text="good" value={good} />
          <StatisticsLine text="bad" value={bad} />
          <StatisticsLine text="neutral" value={neutral} />
          <StatisticsLine text="all" value={totalCounter} />
          <StatisticsLine text="average" value={average} />
          <StatisticsLine text="positive" value={goodAverage} />
        </div>
      )}
    </div>
  );
};

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };
  const handleBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

export default App;
