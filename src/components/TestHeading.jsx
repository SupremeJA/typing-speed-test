import { useTyping } from "../context/TypingContext";
import Settings from "./Settings";

function TestHeading() {
  const { accuracy } = useTyping();

  return (
    <header className="flex flex-col items-center md:justify-between md:flex-row w-full text-xl border-b-[0.1px] border-neutral-400 pb-3">
      <div className="stats flex gap-4 items-center">
        <span>
          <p>WPM:</p>
          <strong>0</strong>
        </span>

        <span>
          <p>Accuracy:</p>
          <strong>{accuracy}%</strong>
        </span>

        <span>
          <p>Time</p>
          <strong>0:50</strong>
        </span>
      </div>

      <Settings />
    </header>
  );
}

export default TestHeading;
