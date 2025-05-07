import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
import { CgDarkMode } from "react-icons/cg";
import { useTheme } from "next-themes";
import DropdownButton from "./DropdownButton";

export function ThemeButton() {
  const { setTheme } = useTheme();

  return (
    <div className="self-center space-x-0.5">
      <DropdownButton className="btn-secondary" content={<CgDarkMode size={24}/>}>
        <div className="flex flex-col m-1 rounded-lg space-y-0.5">
          <a
            className="theme-link"
            onClick={() => {
              setTheme("light");
            }}
          >
            <FaSun className="mr-1" />
            Light
          </a>
          <a
            className="theme-link"
            onClick={() => {
              setTheme("dark");
            }}
          >
            <FaMoon className="mr-1" />
            Dark
          </a>
        </div>
      </DropdownButton>
    </div>
  );
}
