import { BsSun, BsMoonStarsFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <BsSun
          className="w-10 h-10 text-yellow-500 "
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <BsMoonStarsFill
          className="w-10 h-10 text-gray-900 "
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return (
    <nav className=" mb-5 bg-white dark:bg-sky-900">
      <div className="container mx-auto  py-4 flex justify-between items-center">
        <Link href="/">
          <a className="font-bold text-2xl lg:text-4xl dark:text-white">
            Paramo Poke App
          </a>
        </Link>
        <div className="block lg:hidden">{renderThemeChanger()}</div>
        <div className="hidden lg:block">{renderThemeChanger()}</div>
      </div>
    </nav>
  );
};

export default Navbar;
