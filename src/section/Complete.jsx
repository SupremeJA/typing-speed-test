import { Accuracy, Wpm } from "../components/index";
import { useTyping } from "../context/TypingContext";

function Complete() {
  const {
    setComplete,
    restart,
    accuracy,
    correctChar,
    question,
    wpm,
    initialBest,
  } = useTyping();

  return (
    <section className=" relative flex flex-col justify-center items-center gap-10 w-full">
      <div className="text-center">
        <img
          src="
        https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzZ0amE2bmFyajBvdWJsNTh6ZWhsbGxxNmNydTdyeWJjMHV0ajM0dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/e5OgbyGSyxbdpyO1ug/giphy.gif"
          alt="complete gif"
          className="w-100 h-40 mx-auto object-cover rounded-xl"
        />
        <h2 className="text-2xl font-bold text-center mt-4 mb-2">
          {initialBest === 0 ? "Baseline Established" : " Test Complete!"}
        </h2>
        <p className="text-sm text-neutral-400">
          {initialBest === 0
            ? "You've set the bar. Now the real challenge begins-time to beat it"
            : "Solid run. Keep pushing to beat your high score."}
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-start gap-10 w-full md:w-[50%]">
        <div className="completedata">
          <h6 className="text-sm text-neutral-400 mb-1">WPM</h6>
          <p className="text-lg font-bold">{wpm}</p>
        </div>
        <div className="completedata">
          <h6 className="text-sm text-neutral-400 mb-1">Accuracy</h6>
          <p className="flex justify-between text-lg font-bold">
            <Accuracy />
            {accuracy === 100 ? (
              <img
                src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTZtYmFtYTgwZnBteW1lZXg0Y3VqNGFzbXp6NjJweXhxejdyd3RmYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yASFCj2K0MGeASqSom/giphy.gif"
                alt="spinning cat"
                className="w-10 h-5 object-cover rounded-lg"
              />
            ) : (
              ""
            )}
          </p>
        </div>
        <div className="completedata">
          <h6 className="text-sm text-neutral-400 mb-1">Characters</h6>
          {/* opimize logic later*/}
          <p className="text-lg font-bold">{`${correctChar}/${question.length}`}</p>
        </div>
      </div>
      <button
        className="px-8 py-3 bg-gray-200 hover:bg-gray-300 text-neutral-900 rounded transition-colors"
        onClick={() => {
          setComplete(false);
          restart();
        }}
      >
        Go Again
        <img
          src="../assets/images/icon-restart.svg"
          alt="restart icon"
          className="inline-block ml-2 brightness-0"
        />
      </button>
    </section>
  );
}

export default Complete;
