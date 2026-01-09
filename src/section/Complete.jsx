function Complete() {
  return (
    <section className="flex flex-col justify-center items-center gap-10 w-full">
      <div>
        <img
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
          alt="Completion Animation"
          className="w-20 h-20 rounded-2xl justify-self-center"
        />
        <h2 className="text-2xl font-bold text-center mt-4 mb-2">
          Test Complete!
        </h2>
        <p className="text-sm text-neutral-400">
          Solid run. Keep pushing to beat your high score.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-start gap-10 w-full md:w-[50%]">
        <div className="completedata">
          <h6 className="text-sm text-neutral-400 mb-1">WPM</h6>
          <p className="text-lg font-bold">98</p>
        </div>
        <div className="completedata">
          <h6 className="text-sm text-neutral-400 mb-1">Accuracy</h6>
          <p className="text-lg font-bold">100%</p>
        </div>
        <div className="completedata">
          <h6 className="text-sm text-neutral-400 mb-1">Characters</h6>
          <p className="text-lg font-bold">120/5</p>
        </div>
      </div>
      <button
        className="px-8 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold rounded transition-colors
        "
      >
        Go Again
      </button>
    </section>
  );
}

export default Complete;
