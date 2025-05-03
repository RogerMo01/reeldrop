'use client'
import Navbar from "@/components/Navbar";
import { NavbarItem } from "@/types/navigation";

const Pages: NavbarItem[] = [
  { name: "About", url: "/about", btnType: false },
  { name: "Contact", url: "/contact", btnType: false },
  { name: "Log in", url: "/login", btnType: true },
  { name: "Sign up", url: "/signup", btnType: true },
];

export default function HomePage() {

  return (
    <div className="flex flex-col h-full">
      <Navbar Pages={Pages} />
      <main className="flex-grow text-black dark:text-white">
        <h1>Home Page</h1>
      </main>
      <footer className="bg-red-200 dark:bg-red-950">
        <p>Footer</p>
      </footer>
    </div>
  );
}
