import { useState } from "react";

export default function ScoreButton({
  score,
}) {
  const [newScore,setScore] = useState(score)
  const handleIncrement = (e) => {
    e.preventDefault();
    const increasedScore = newScore + 1;
    setScore(increasedScore);
    console.log(increasedScore);
  };
  const handleDecrement = (e) => {
    e.preventDefault();
    const decreasedScore = newScore - 1;
    setScore(decreasedScore);
    console.log(decreasedScore);
  };
  return (
    <div className="flex flex-col rounded-lg bg-slate-100 h-28 place-content-around mr-4 ">
      <button onClick={handleIncrement} className="text-slate-300  w-10 font-bold text-xl">
        +
      </button>
      <div className="w-10">
      <p className="text-md text-purple-500 font-bold text-center">
        {newScore}
      </p>
      </div>
      <button onClick={handleDecrement} className="text-slate-300 font-bold text-xl">
        -
      </button>
    </div>
  );
}
