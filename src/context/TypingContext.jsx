import { useEffect } from "react";
import { useState } from "react";
import { useReducer } from "react";
import { useContext, createContext } from "react";
import data from "../data/data.json";

const TypingContext = createContext();

const initialState = {
  question: "",
  start: false,
  wpm: 0,
  bestWpm: localStorage.getItem("WPM") || 0,
  correctChar: 0,
  incorrectChar: 0,
  difficulty: "easy",
  testMode: "timed",
  reset: false,
  accuracy: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "question/loaded":
      return {
        ...state,
        question: action.payload.text,
      };

    case "start":
      return {
        ...state,
        start: true,
        reset: false,
      };

    case "correct":
      return {
        ...state,
        correctChar: state.correctChar + 1,
      };

    case "incorrect":
      return {
        ...state,
        incorrectChar: state.incorrectChar + 1,
      };

    case "difficulty/set":
      return {
        ...state,
        difficulty: action.payload,
        incorrectChar: 0,
        correctChar: 0,
        reset: true,
      };

    case "testMode/set":
      return {
        ...state,
        testMode: action.payload,
      };

    case "restart":
      return {
        ...initialState,
        question: state.question,
        difficulty: state.difficulty,
        testMode: state.testMode,
        reset: true,
        accuracy: 0,
      };

    case "setAccuracy": {
      // logic for calculating accuracy

      return {
        ...state,
        accuracy:
          Math.floor(
            (state.correctChar / (state.correctChar + state.incorrectChar)) *
              100,
          ) || 0,
      };
    }

    case "setWPM":
      return {
        ...state,
        wpm: action.payload,
      };

    case "setBestWPM":
      return {
        ...state,
        bestWpm: action.payload,
      };

    default:
      console.log(action.type);
      throw new Error("Unknown action type");
  }
}

function TypingProvider({ children }) {
  const [
    {
      question,
      start,
      correctChar,
      incorrectChar,
      difficulty,
      testMode,
      reset,
      accuracy,
      wpm,
      bestWpm,
    },
    dispatch,
  ] = useReducer(reducer, initialState);
  const [complete, setComplete] = useState(false);
  const initialBest = initialState.bestWpm;

  async function fetchData() {
    try {
      const queryMode = difficulty;
      const modeData = data[queryMode];
      const random = Math.floor(Math.random() * modeData.length);
      dispatch({ type: "question/loaded", payload: modeData[random] });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function startTest() {
    dispatch({ type: "start" });
  }

  function addCorrect() {
    dispatch({ type: "correct" });
  }

  function addInCorrect() {
    dispatch({ type: "incorrect" });
  }

  function setWPM(data) {
    dispatch({ type: "setWPM", payload: data });
  }

  function setBestWpm() {
    dispatch({ type: "setBestWPM", payload: localStorage.getItem("WPM") });
  }

  useEffect(() => {
    if (wpm > bestWpm) {
      localStorage.setItem("WPM", wpm);
      setBestWpm();
    }
  }, [wpm]);

  function setDifficulty(newDifficulty) {
    dispatch({ type: "difficulty/set", payload: newDifficulty });
  }

  function setTestMode(newMode) {
    dispatch({ type: "testMode/set", payload: newMode });
  }

  function restart() {
    dispatch({ type: "restart" });
  }

  useEffect(() => {
    function setAccuracy() {
      dispatch({ type: "setAccuracy" });
    }
    setAccuracy();
  }, [correctChar, incorrectChar]);

  return (
    <TypingContext.Provider
      value={{
        fetchData,
        question,
        start,
        startTest,
        addCorrect,
        addInCorrect,
        correctChar,
        incorrectChar,
        difficulty,
        testMode,
        setDifficulty,
        setTestMode,
        restart,

        reset,
        setComplete,
        complete,
        accuracy,
        wpm,
        bestWpm,
        setWPM,
        initialBest,
      }}
    >
      {children}
    </TypingContext.Provider>
  );
}

function useTyping() {
  return useContext(TypingContext);
}

// eslint-disable-next-line react-refresh/only-export-components
export { TypingProvider, useTyping };
