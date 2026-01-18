import { ModeButton } from "./index";

function DesktopSettings({
  testModeList,
  difficultyList,
  handleDiff,
  difficulty,
  testMode,
  setTestMode,
}) {
  return (
    <div className="flex flex-col md:flex-row gap-5 items-center text-neutral-400">
      <div className="flex gap-3 items-center pr-2 border-r-2 border-neutral-400">
        <p className="text-lg">Difficulty</p>
        {difficultyList.map((e, i) => (
          <ModeButton
            key={i}
            isActive={difficulty === e}
            onClick={() => handleDiff(e)}
          >
            {e}
          </ModeButton>
        ))}
      </div>

      <div className="flex gap-3 items-center">
        <p className="text-lg">Mode</p>
        {testModeList.map((e, i) => (
          <ModeButton
            key={i}
            isActive={testMode === e}
            onClick={() => setTestMode(e)}
          >
            {e.charAt(0).toUpperCase() + e.slice(1)}
            {e === "timed" ? "(60s)" : ""}
          </ModeButton>
        ))}
      </div>
    </div>
  );
}

export default DesktopSettings;
