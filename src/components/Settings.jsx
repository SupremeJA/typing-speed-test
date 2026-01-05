import ModeButton from "./ModeButton";

function Settings() {
  return (
    <div className="hidden md:flex gap-5 items-center text-neutral-400">
      <div className="flex gap-3 items-center pr-2 border-r-2 border-neutral-400">
        <p className="text-lg">Difficulty</p>
        <ModeButton>Easy</ModeButton>
        <ModeButton>Medium</ModeButton>
        <ModeButton>Hard</ModeButton>
      </div>

      <div className="flex gap-3 items-center">
        <p className="text-lg">Mode</p>
        <ModeButton>Timed(60s)</ModeButton>
        <ModeButton>Passage</ModeButton>
      </div>
    </div>
  );
}

export default Settings;
