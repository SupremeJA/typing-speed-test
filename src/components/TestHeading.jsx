import { Settings } from "./index";
import Stats from "./Stats";

function TestHeading() {
  return (
    <header className="flex flex-col items-center md:justify-between md:flex-row w-full text-xl border-b-[0.1px] border-neutral-400 pb-3">
      <Stats />

      <Settings />
    </header>
  );
}

export default TestHeading;
