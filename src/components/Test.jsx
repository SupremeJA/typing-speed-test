import { useState, useEffect } from "react";
import { useTyping } from "../context/TypingContext";

function Test() {
  const {
    question,
    addCorrect,
    addInCorrect,
    reset,
    defaultReset,
    setComplete,
  } = useTyping();
  const [inputVal, setInputVal] = useState("");

  useEffect(() => {
    if (reset) {
      setInputVal("");
    }
  }, [reset]);

  const handleInput = (e) => {
    if (reset) defaultReset();
    const input = e.target.value;
    if (input.length <= question.length) {
      setInputVal(input);

      if (input.length > inputVal.length) {
        const i = input.length - 1;
        if (input[i] === question[i]) {
          addCorrect();
        } else {
          addInCorrect();
        }
      }
    }
    if (input.length === question.length) {
      // Test complete
      setComplete(true);
    }
  };

  return (
    <section>
      <div className="relative text-3xl text-neutral-400 leading-relaxed pt-7 pb-13">
        <textarea
          autoComplete="false"
          autoCorrect="false"
          autoFocus="true"
          autoCapitalize="false"
          spellCheck="false"
          value={inputVal}
          onPaste={(e) => e.preventDefault()}
          onSelect={(e) => {
            e.target.selectionStart = e.target.value.length;
            e.target.selectionEnd = e.target.value.length;
          }}
          onClick={(e) => {
            e.target.selectionStart = e.target.value.length;
            e.target.selectionEnd = e.target.value.length;
          }}
          onChange={handleInput}
          className="absolute opacity-10 flex items-start py-15 w-full h-full max-w-full text-3xl text-neutral-400 leading-relaxed"
        />
        {question.split("").map((e, i) => {
          let style = "";
          const char = inputVal[i];

          if (char !== undefined) {
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
