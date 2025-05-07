import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
import { PiMonitorDuotone } from "react-icons/pi";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { useTheme } from "next-themes";
import DropdownButton from "./DropdownButton";

export function ThemeButton() {
  const { setTheme } = useTheme();

  const icon = <><CiLight className="block dark:hidden" size={24}/><CiDark className="hidden dark:block" size={24}/></>;

  return (
    <div className="self-center space-x-0.5">
      <DropdownButton className="btn-secondary" content={icon}>
        <div className="flex flex-col m-1 rounded-lg space-y-0.5">
          <a
            className="theme-option"
            onClick={() => {
              setTheme("light");
            }}
          >
            <FaSun className="mr-1" />
            Light
          </a>
          <a
            className="theme-option"
            onClick={() => {
              setTheme("dark");
            }}
          >
            <FaMoon className="mr-1" />
            Dark
          </a>
          <a
            className="theme-option"
            onClick={() => {
              setTheme("system");
            }}
          >
            <PiMonitorDuotone className="mr-1" />
            System
          </a>
        </div>
      </DropdownButton>
    </div>
  );
}
