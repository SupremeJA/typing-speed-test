import React, { useEffect, useState } from "react";

import { Accuracy, Timer, Wpm } from "./index";

import { useTyping } from "../context/TypingContext";

function Stats() {
  // There's prolly a better way to do this, but wareva
  const defTime = 60;
  const [time, setTime] = useState(defTime);
  const [timeLeft, setTimeLeft] = useState(time);
  const { start, testMode, reset, setComplete } = useTyping();
  const interval = React.useRef(null);

  const format = (ms) => {
    const s = Math.floor((ms / 1000) % 60);
    const m = Math.floor((ms / 60000) % 60);
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  // Looks messy, but it works
  useEffect(() => {
    if (reset) {
      setTime(defTime);
      setTimeLeft(time);
      return;
    }

    if (testMode === "timed") {
      if (start && timeLeft > 0) {
        interval.current = setInterval(() => {
          setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);
      } else if (timeLeft === 0) {
        setComplete(true);
      }

      return () => clearInterval(interval.current);
    }

    setTime(0);
    interval.current = setInterval(() => {
      setTime((prev) => prev + 10);
    }, 10);

    return () => clearInterval(interval.current);
  }, [start, timeLeft, setComplete, reset]);

  return (
    <div className="stats flex gap-4 items-center">
      <span>
        <p>WPM:</p>

        <Wpm time={time} timeLeft={timeLeft} maxTime={time} />
      </span>

      <span>
        <p>Accuracy:</p>
        {/* Might wanna fix logic */}
        <Accuracy />
      </span>

      <Timer timeLeft={timeLeft} format={format(time)} />
    </div>
  );
}

export default Stats;
