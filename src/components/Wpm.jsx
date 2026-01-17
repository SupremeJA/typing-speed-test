import { useEffect } from "react";
import { useTyping } from "../context/TypingContext";

function Wpm({ timeLeft, maxTime }) {
  const { correctChar, complete, setWPM } = useTyping();
  const timeElapsed = maxTime - timeLeft;
  const minutes = timeElapsed / 60;
  const calcWpm = minutes > 0 ? Math.round(correctChar / 5 / minutes) : 0;

  useEffect(() => {
    if (complete) {
      setWPM(calcWpm);
    }
  }, [complete]);

  return <strong>{calcWpm}</strong>;
}

export default Wpm;
