import {
  BookOpen,
  LayoutGrid,
  Menu,
  MessageSquare,
  Moon,
  Sun,
  Tags
} from "lucide-react";
import React, { memo, useCallback, useState } from "react";

import { useTheme } from "../../../hooks/useTheme";
import { useScrollPosition } from "./useScrollPosition";

// Extract NavLink to its own memoized component
const NavLink = memo(({ href, icon, label, onClick, className = "" }) => (
  <a
    href={href}
    className={`inline-flex items-center rounded-full px-4 py-2 text-sm transition duration-300
    hover:bg-white/10 dark:hover:bg-gray-800/50 ${className}`}
    onClick={onClick}
  >
    {icon}
    <span className="ml-2">{label}</span>
  </a>
));

NavLink.displayName = 'NavLink';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useScrollPosition();
  const { isDarkMode, toggleTheme } = useTheme();

  // Memoize the toggle function
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const navLinks = [
    // { href: "/#", icon: <Home className="h-4 w-4" />, label: "Home" },
    { href: "/#projects", icon: <LayoutGrid className="h-4 w-4" />, label: "Projects" },
    { href: "/#skills", icon: <Tags className="h-4 w-4" />, label: "Skills" },
    { href: "/#blog", icon: <BookOpen className="h-4 w-4" />, label: "Blog" },
    {
      href: "/#contact",
      icon: <MessageSquare className="h-4 w-4" />,
      label: "Contact",
    },
  ];

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? "py-2" : "py-6"
      }`}
    >
      <nav
        className={`mx-auto transition-all duration-300 ${
          isScrolled
            ? "w-[90vw] rounded-3xl bg-white/10 dark:bg-zinc-900 shadow-lg backdrop-blur-md"
            : "shadow-xl mx-auto w-max rounded-3xl bg-white/10 dark:bg-zinc-900 px-4 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-3">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-zinc-800 dark:text-white">R.R Saikat</span>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                icon={link.icon}
                label={link.label}
                className="text-zinc-700 dark:text-zinc-200"
              />
            ))}

            <button
              onClick={toggleTheme}
              className="ml-2 flex h-10 w-10 items-center justify-center rounded-full p-2 text-zinc-700 dark:text-zinc-200 hover:bg-white/10 dark:hover:bg-gray-800/50"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={toggleTheme}
              className="mr-2 flex h-10 w-10 items-center justify-center rounded-full p-2 text-zinc-700 dark:text-zinc-200 hover:bg-white/10 dark:hover:bg-gray-800/50"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            <button
              onClick={toggleMenu}
              className="rounded-full p-2 text-zinc-700 dark:text-zinc-200 hover:bg-white/10 dark:hover:bg-gray-800/50"
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="px-4 pb-4 md:hidden">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                icon={link.icon}
                label={link.label}
                className="block w-full text-zinc-700 dark:text-zinc-200"
                onClick={() => setIsMenuOpen(false)}
              />
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default memo(Navbar);