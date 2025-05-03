import { NavbarItem } from "@/types/navigation";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import Logo from "@/../public/logo.svg";

interface Props {
  Pages: NavbarItem[];
}

function MobileMenu({ Pages }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="md:hidden self-center">
      {/* Menu Button */}
      <button className="bg-transparent p-1 rounded-lg self-center border border-transparent hover:border-complementary hover:cursor-pointer">
        <IoMenu
          onClick={() => setIsOpen(!isOpen)}
          className="text-complementary dark:text-white"
          size={32}
        />
      </button>

      {/* Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-dvh flex flex-col bg-gray-50 dark:bg-complementary-d z-50 transform transition-all duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Header*/}
          <div className="flex bg-primary-l px-5 py-1 items-center justify-between dark:bg-complementary-l">
            <button className="bg-transparent p-1 rounded-lg self-center border border-transparent hover:border-complementary hover:cursor-pointer">
              <IoClose
                onClick={() => setIsOpen(false)}
                className="text-complementary dark:text-white"
                size={32}
              />
            </button>
            <Image src={Logo} alt="logo" width={48} />
          </div>

          {/* Navbar Items */}
          <div className="flex-1 flex flex-col justify-between text-xl mt-6 py-4 px-8">
            {/* Links */}
            <ul className="space-y-6">
              {Pages.filter((x) => !x.btnType).map((item) => (
                <li
                  key={item.url}
                  className="navbar-link"
                  onClick={() => router.push(item.url)}
                >
                  {item.name}
                </li>
              ))}
            </ul>
            {/* Buttons */}
            <ul className="space-y-2">
              {Pages.filter((x) => x.btnType).map((item) => (
                <li
                  key={item.url}
                  className="btn-primary text-center"
                  onClick={() => router.push(item.url)}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
