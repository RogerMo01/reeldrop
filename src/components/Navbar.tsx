"use client";
import Image from "next/image";
import Logo from "@/../public/logo.svg";
import { NavbarItem } from "@/types/navigation";
import { useRouter } from "next/navigation";
import { ThemeButton } from "./ThemeButton";
import MenuMobile from "./MenuMobile";

interface Props {
  Pages: NavbarItem[];
}

function Navbar({ Pages }: Props) {
  const router = useRouter();

  return (
    <nav className="py-1 px-4 md:px-20 lg:px-32 bg-primary-l dark:bg-complementary-l">
      <div className="flex justify-between">
          
        {/* Small screens navbar menu */}
        <MenuMobile Pages={Pages} />
          
        <Image src={Logo} alt="logo" width={48} />

        {/* Large screens navbar items */}
        <ul className="hidden md:flex space-x-4">
          {Pages.map((item) => (
            <li
              key={item.url}
              className={`${item.btnType ? 'btn-primary self-center' : 'navbar-link'}`}
              onClick={() => router.push(item.url)}
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* Theme button */}
        <ThemeButton />

      </div>
    </nav>
  );
}

export default Navbar;
