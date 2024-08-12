/* eslint-disable no-unused-vars */
import { useState } from "react";

function App() {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));
  const [mostVoted, setMostVoted] = useState(0);
  const [max, setMax] = useState(0);

  const randomNumber = Math.floor(Math.random() * anecdotes.length);

  const handleVote = (n) => {
    const copy = [...points];
    copy[n] += 1;
    setPoints(copy);

    const currentMax = Math.max(...copy);
    console.log("current max:", currentMax);
    //max value of the copy array
    if (currentMax > max) {
      setMax(currentMax);
      setMostVoted(copy.indexOf(currentMax)); //assigns the index of the max value
    }
  };

  const handleClick = () => {
    console.log(randomNumber);
    setSelected(randomNumber);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>has {points[selected]} votes</p>
      <div>
        <button onClick={() => handleVote(selected)}>vote</button>
        <button onClick={handleClick}>next anecdote</button>
        <h1>Anecdote with most votes</h1>
        <p>
          {anecdotes[mostVoted]} <br /> has {points[mostVoted]} votes
        </p>
      </div>
    </div>
  );
}

export default App;
