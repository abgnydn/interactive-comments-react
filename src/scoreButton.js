export default function ScoreButton({
  handleIncrement,
  handleDecrement,
  score,
}) {
  return (
    <div className="flex flex-col rounded-lg bg-slate-100 h-28 my-auto place-content-around mr-4">
      <button onClick={handleIncrement} className="text-slate-300  w-10 font-bold text-xl">
        +
      </button>
      <div className="w-10">
      <p className="text-md text-purple-500 font-bold text-center">
        {score}
      </p>
      </div>
      <button onClick={handleDecrement} className="text-slate-300 font-bold text-xl">
        -
      </button>
    </div>
  );
}
