import useDropdown from "@/hooks/useDropdown";

interface Props{
  className: string,
  content: React.ReactNode,
  children: React.ReactNode,
}

function DropdownButton({className="", content, children}: Props) {
  const { show, dropdownRef, handleClickBtn } = useDropdown();
  
  return (
    <div className="self-center relative inline-block">
      <button ref={dropdownRef} className={className} onClick={handleClickBtn}>
        {content}
      </button>

      <div
        className={`absolute right-0 mt-1 bg-white dark:bg-black rounded-lg shadow-lg z-50 
                ${show ? "block" : "hidden"}`}
      >
        {children}
      </div>
    </div>
  );
}

export default DropdownButton;
