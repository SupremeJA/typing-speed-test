import { useReducer } from "react";
import { useContext, createContext } from "react";

const TypingContext = createContext();
const BASE_URL = "http://localhost:8000";

const initialState = {
  question: "",
  wpm: 0,
  correctChar: 0,
  incorrectChar: 0,
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
        correctChar: state.correctChar++,
      };

    case "incorrect":
      return {
        ...state,
        incorrectChar: state.incorrectChar++,
      };

    default:
      throw new Error("hihihihi");
  }
}

const random = Math.floor(Math.random() * 10);

function TypingProvider({ children }) {
  const [{ question, correctChar, incorrectChar }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  async function fetchData(mode) {
    try {
      const response = await fetch(`${BASE_URL}/${mode}`);
      const data = await response.json();
      dispatch({ type: "question/loaded", payload: data[random] });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  function addCorrect() {
    dispatch({ type: "correct" });
  }

  function addInCorrect() {
    dispatch({ type: "incorrect" });
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
