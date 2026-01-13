import { ModeButton } from "./index";
import { useTyping } from "../context/TypingContext";

function Settings() {
  const { difficulty, setDifficulty, testMode, setTestMode, fetchData } =
    useTyping();

  function handleDifficultyChange(newDifficulty) {
    setDifficulty(newDifficulty);
    fetchData(newDifficulty);
  }

  return (
    <div className="hidden md:flex gap-5 items-center text-neutral-400">
      <div className="flex gap-3 items-center pr-2 border-r-2 border-neutral-400">
        <p className="text-lg">Difficulty</p>
        <ModeButton
          isActive={difficulty === "easy"}
          onClick={() => handleDifficultyChange("easy")}
        >
          Easy
        </ModeButton>
        <ModeButton
          isActive={difficulty === "medium"}
          onClick={() => handleDifficultyChange("medium")}
        >
          Medium
        </ModeButton>
        <ModeButton
          isActive={difficulty === "hard"}
          onClick={() => handleDifficultyChange("hard")}
        >
          Hard
        </ModeButton>
      </div>

      <div className="flex gap-3 items-center">
        <p className="text-lg">Mode</p>
        <ModeButton
          isActive={testMode === "timed"}
          onClick={() => setTestMode("timed")}
        >
          Timed(60s)
        </ModeButton>
        <ModeButton
          isActive={testMode === "passage"}
          onClick={() => setTestMode("passage")}
        >
          Passage
        </ModeButton>
      </div>
    </div>
  );
}

export default Settings;
