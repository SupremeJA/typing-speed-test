import { useEffect } from "react";
import Accuracy from "./Accuracy";
import Timer from "./Timer";
import Wpm from "./Wpm";
import { useState } from "react";
import { useTyping } from "../context/TypingContext";

function Stats() {
  const maxTime = 60;
  const [timeLeft, setTimeLeft] = useState(maxTime);
  const { start, setComplete } = useTyping();
  useEffect(() => {
    let interval = null;
    // Only run if the game is live and time remains

    if (start && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      // Handle Game Over here
      setComplete(true);
    }

    // CLEANUP: Very important! Stops the timer if component unmounts
    return () => clearInterval(interval);
  }, [start, timeLeft, setComplete]);

  return (
    <div className="stats flex gap-4 items-center">
      <span>
        <p>WPM:</p>
        <Wpm timeLeft={timeLeft} maxTime={maxTime} />
      </span>

      <span>
        <p>Accuracy:</p>
        {/* Might wanna fix logic */}
        <Accuracy />
      </span>

      <Timer timeLeft={timeLeft} />
    </div>
  );
}

export default Stats;
