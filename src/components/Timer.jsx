import { useTyping } from "../context/TypingContext";

function Timer({ timeLeft, format }) {
  const { testMode } = useTyping();

  return (
    <span>
      <p>Time</p>

      <strong>{testMode === "passage" ? format : `0:${timeLeft}`}</strong>
    </span>
  );
}

export default Timer;
