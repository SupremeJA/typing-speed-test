import { useEffect } from "react";
import { useReducer } from "react";
import { useContext, createContext } from "react";

const TypingContext = createContext();
const BASE_URL = "http://localhost:8000";

const initialState = {
  question: "",
  wpm: 0,
  correctChar: 0,
  incorrectChar: 0,
  difficulty: "easy",
  testMode: "timed",
  reset: false,
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
      };

    case "defaultReset":
      return {
        ...state,
        reset: false,
      };

    default:
      throw new Error("Unknown action type");
  }
}

function TypingProvider({ children }) {
  const [
    { question, correctChar, incorrectChar, difficulty, testMode, reset },
    dispatch,
  ] = useReducer(reducer, initialState);

  async function fetchData() {
    try {
      const queryMode = difficulty;
      const response = await fetch(`${BASE_URL}/${queryMode}`);
      const data = await response.json();
      const random = Math.floor(Math.random() * data.length);
      dispatch({ type: "question/loaded", payload: data[random] });
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
