import { useTyping } from "../context/TypingContext";

function Timer({ timeLeft, format }) {
  const { testMode } = useTyping();

  return (
    <span>
      <p>Time</p>
      {/* {console.log(format === `00:00`)}*/}
      {console.log("hi")}
      <strong>{testMode === "passage" ? format : `0:${timeLeft}`}</strong>
    </span>
  );
}

export default Timer;
