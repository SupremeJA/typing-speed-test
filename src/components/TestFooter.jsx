import { useState } from "react";
import { useTyping } from "../context/TypingContext";
import { MobileSettings } from ".";

function TestFooter() {
  const [shake, setShake] = useState(false);
  const { start, restart } = useTyping();

  const handleClick = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
    restart();
  };

  return (
    <footer
      className={`w-full ${start ? "flex" : "hidden"} items-center justify-center p-11 border-t-[0.1px]  border-neutral-400`}
    >
      <button
        onClick={handleClick}
        className={`px-8 py-3 bg-gray-700 hover:bg-gray-300 text-neutral-0 font-bold rounded transition-colors ${
          shake ? "animate-shake" : ""
        }`}
      >
        RESTART
      </button>
    </footer>
  );
}

export default TestFooter;
