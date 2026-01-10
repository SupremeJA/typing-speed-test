import { useEffect } from "react";
import { useState } from "react";
import { useReducer } from "react";
import { useContext, createContext } from "react";
import data from "../data/data.json";

const TypingContext = createContext();

const initialState = {
  question: "",
  wpm: 0,
  correctChar: 0,
  incorrectChar: 0,
  difficulty: "easy",
  testMode: "timed",
  reset: false,
  accuracy: 100,
};

function reducer(state, action) {
  switch (action.type) {
    case "question/loaded":
      return {
        ...state,
        question: action.payload.text,
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

    case "defaultReset":
      return {
        ...state,
        reset: false,
      };

    case "setAccuracy": {
      const total = state.correctChar + state.incorrectChar;
      return {
        ...state,
        accuracy:
          total > 0
            ? Math.floor((state.correctChar / total) * 100)
            : state.accuracy,
      };
    }

    default:
      throw new Error("Unknown action type");
  }
}

function TypingProvider({ children }) {
  const [
    {
      question,
      correctChar,
      incorrectChar,
      difficulty,
      testMode,
      reset,
      accuracy,
    },
    dispatch,
  ] = useReducer(reducer, initialState);
  const [complete, setComplete] = useState(false);

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

  function addCorrect() {
    dispatch({ type: "correct" });
  }

  function addInCorrect() {
    dispatch({ type: "incorrect" });
  }

  function setDifficulty(newDifficulty) {
    dispatch({ type: "difficulty/set", payload: newDifficulty });
  }

  function setTestMode(newMode) {
    dispatch({ type: "testMode/set", payload: newMode });
  }

  function restart() {
    dispatch({ type: "restart" });
  }

  function defaultReset() {
    dispatch({ type: "defaultReset" });
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
        addCorrect,
        addInCorrect,
        correctChar,
        incorrectChar,
        difficulty,
        testMode,
        setDifficulty,
        setTestMode,
        restart,
        defaultReset,
        reset,
        setComplete,
        complete,
        accuracy,
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
