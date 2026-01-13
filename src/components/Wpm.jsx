import { useTyping } from "../context/TypingContext";

function Wpm({ timeLeft, maxTime }) {
  const { correctChar, complete, setWPM } = useTyping();
  const timeElapsed = maxTime - timeLeft;
  const minutes = timeElapsed / 60;
  const wpm = minutes > 0 ? Math.round(correctChar / 5 / minutes) : 0;

  if (complete) setWPM(wpm);
  return <strong>{wpm}</strong>;
}

export default Wpm;
