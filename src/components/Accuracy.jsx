import { useTyping } from "../context/TypingContext";

function Accuracy() {
  const { accuracy } = useTyping();
  console.log(accuracy > 0);
  return (
    <strong
      className={`${accuracy >= 0 && accuracy < 100 ? "text-red-500" : "text-green-500"} `}
    >
      {accuracy}%
    </strong>
  );
}

export default Accuracy;
