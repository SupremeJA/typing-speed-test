function ModeButton({ children, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`border-2 border-blue-500 text-sm px-2 py-0.5 rounded-md transition-colors ${
        isActive
          ? "bg-blue-500 text-white"
          : "text-blue-500 hover:bg-blue-500 hover:text-white"
      }`}
    >
      {children}
    </button>
  );
}

export default ModeButton;
