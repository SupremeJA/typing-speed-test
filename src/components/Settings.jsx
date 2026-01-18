import { DesktopSettings, MobileSettings } from "./index";
import { useTyping } from "../context/TypingContext";

function Settings() {
  const {
    testModeList,
    difficultyList,
    difficulty,
    setDifficulty,
    testMode,
    setTestMode,
    fetchData,
  } = useTyping();

  function handleDifficultyChange(newDifficulty) {
    setDifficulty(newDifficulty);
    fetchData(newDifficulty);
  }

  return (
    <>
      <DesktopSettings
        testModeList={testModeList}
        difficultyList={difficultyList}
        handleDiff={handleDifficultyChange}
        difficulty={difficulty}
        testMode={testMode}
        setTestMode={setTestMode}
      />
      <MobileSettings />
    </>
  );
}

export default Settings;
