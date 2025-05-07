import { useEffect, useRef, useState } from "react";

function useDropdown() {
  const [show, setShow] = useState(false);
  const dropdownRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setShow(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleClickBtn = () => setShow(!show);

  return { show, dropdownRef, handleClickBtn };
}

export default useDropdown;