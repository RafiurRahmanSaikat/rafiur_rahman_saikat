/**
 * Theme Provider and Hook
 *
 * Provides dark/light mode functionality throughout the application
 */
import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext(undefined)

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Check for saved theme preference or system preference
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme")
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

      return savedTheme || (systemPrefersDark ? "dark" : "light")
    }
    return "light"
  })

  const isDarkMode = theme === "dark"

  useEffect(() => {
    // Update localStorage and document class when theme changes
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme)

      if (theme === "dark") {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
  }

  return <ThemeContext.Provider value={{ theme, isDarkMode, setTheme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
