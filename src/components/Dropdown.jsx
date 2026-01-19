import { useState } from "react";

function Dropdown({ list, typeFunc, type }) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState(type);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="relative inline-block text-left">
        <div>
          <button
            onClick={toggleDropdown}
            className="inline-flex justify-center w-full rounded-md
                    border border-gray-300 shadow-sm px-2 py-0.5 bg-neutral-900
                    text-sm font-medium text-neutral-0
                    focus:outline-none"
          >
            {name}
            <svg
              className="ml-2 -mr-1 h-5 w-5"
              xmlns="https://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div
            className="origin-top-right absolute right-0 mt-2
                    rounded-md shadow-lg bg-neutral-900 ring-1 ring-black ring-opacity-5
                    focus:outline-none"
            role="menu"
          >
            <div className="py-1" role="none">
              {list.map((e, i) => (
                <a
                  href="#"
                  className={`block px-4 py-2   ${type === e ? "bg-neutral-0 text-neutral-800" : "text-neutral-0"}`}
                  role="menuitem"
                  key={i}
                  onClick={() => {
                    typeFunc(e);
                    setName(e);
                    setIsOpen(false);
                  }}
                >
                  {e} {e === "timed" ? "(60s)" : ""}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Dropdown;
