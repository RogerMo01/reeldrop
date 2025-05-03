import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
// import { CgDarkMode } from "react-icons/cg";
import { useTheme } from "next-themes";

export function ThemeButton() {
  const { setTheme } = useTheme();

  return (
    <div className="self-center space-x-0.5">
      <button
        className="btn-secondary"
        onClick={() => {
          setTheme("light");
        }}
      >
        <FaSun size={22} />
      </button>
      <button
        className="btn-secondary"
        onClick={() => {
          setTheme("dark");
        }}
      >
        <FaMoon size={22} />
      </button>
    </div>
  );
}
