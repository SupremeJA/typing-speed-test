import { useState } from "react";
import { useTyping } from "../context/TypingContext";
import { useEffect } from "react";

function Test() {
  const { fetchData, question, addCorrect, addInCorrect } = useTyping();
  const [inputVal, setInputVal] = useState("");

  useEffect(() => {
    fetchData("easy");
  }, []);

  const handleInput = (e) => {
    const input = e.target.value;
    if (input.length <= question.length) setInputVal(input);
  };
  return (
    <section>
      <div className="relative text-3xl text-neutral-400 leading-relaxed py-5">
        <textarea
          autoComplete="false"
          autoCorrect="false"
          autoFocus="true"
          autoCapitalize="false"
          spellCheck="false"
          onPaste={(e) => e.preventDefault()}
          onChange={handleInput}
          className="absolute opacity-10 flex items-start w-full max-w-full h-full text-3xl text-neutral-400 leading-relaxed"
        />
        {question.split("").map((e, i) => {
          let style = "";
          const char = inputVal[i];

          if (char !== undefined) {
            char === e ? addCorrect() : addInCorrect();

            style = char === e ? "correct" : "wrong";
          }

          // console.log(correctChar, incorrectChar);
          return (
            <span id={i} key={i} className={style}>
              {e}
            </span>
          );
        })}
      </div>
    </section>
  );
}

export default Test;
