import { useEffect } from "react";
import { useTyping } from "../context/TypingContext";

function Wpm({ time, timeLeft, maxTime }) {
  const { correctChar, complete, setWPM, testMode } = useTyping();

  function minutes() {
    if (testMode === "passage") return (time / 60000) % 60;
    return (maxTime - timeLeft) / 60;
  }

  const calcWpm = minutes() > 0 ? Math.round(correctChar / 5 / minutes()) : 0;
  useEffect(() => {
    if (complete) {
      setWPM(calcWpm);
    }
  }, [complete]);

  return <strong>{calcWpm}</strong>;
}

export default Wpm;
