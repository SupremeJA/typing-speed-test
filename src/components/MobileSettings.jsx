import Dropdown from "./Dropdown";

function MobileSettings({
  testModeList,
  difficultyList,
  handleDiff,
  difficulty,
  testMode,
  setTestMode,
}) {
  return (
    <div className="md:hidden flex gap-6 mt-5 z-999 ">
      <Dropdown list={difficultyList} type={difficulty} typeFunc={handleDiff} />
      <Dropdown list={testModeList} type={testMode} typeFunc={setTestMode} />
    </div>
  );
}

export default MobileSettings;
