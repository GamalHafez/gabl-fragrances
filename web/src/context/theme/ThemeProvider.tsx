import { setItem } from "@/utils";
import { createContext, useState } from "react";

const ThemeContext = createContext<{ isDark: boolean; toggle: () => void }>({
  isDark: false,
  toggle: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const storedTheme = localStorage.getItem("theme");
  const initialTheme = storedTheme ? JSON.parse(storedTheme) : false;

  const [isDark, setIsDark] = useState(initialTheme);
  const toggle = () => {
    setIsDark((prev: boolean) => !prev);
    setItem("theme", !isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext };
