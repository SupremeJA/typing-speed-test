import { useTyping } from "../context/TypingContext";

function Load() {
  const { start, startTest } = useTyping();
  return (
    <div
      className={`absolute z-30 w-full h-full ${start ? "hidden" : "flex"} flex-col justify-center items-center gap-4 backdrop-blur-xs`}
      onClick={startTest}
    >
      <button className="rounded-lg text-neutral-100 font-bold bg-blue-600 p-2 ">
        Start Typing Test
      </button>
      <p>Or click the text and start typing</p>
    </div>
  );
}

export default Load;
