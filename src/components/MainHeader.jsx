function MainHeader() {
  return (
    <header className="flex justify-between items-center py-3 mb-10 ">
      <div className="flex gap-2">
        <img src="../assets/images/logo-small.svg" />
        <span className="hidden md:block">
          <h1 className="text-2xl font-semibold">Typing Speed Test</h1>
          <p className="text-xs font-light">
            Type as fast as you can in 60 seconds
          </p>
        </span>
      </div>

      <div className="flex">
        🏆 <span className="hidden md:flex">Personal</span> Best:
        <strong className="font-semibold">78 WPM</strong>
      </div>
    </header>
  );
}

export default MainHeader;
