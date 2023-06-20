'use client'

import { useAtom } from 'jotai';
import { useLocalStorage } from "@/lib/hooks/useLocalStorage";
import { themeAtom } from '@/store';
import "material-symbols";

function ThemeToggleButton() {
  const [theme, setTheme] = useAtom(themeAtom);
  const [, setLocalTheme] = useLocalStorage("theme", "dark");

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    setLocalTheme(newTheme);
  };

  return (
    <button onClick={toggleTheme} className="h-fit text-stone-500">
      {theme === 'light' ? <span className="material-symbols-rounded">dark_mode</span> : <span className="material-symbols-rounded">wb_sunny</span>}
    </button>
  );
}

export default ThemeToggleButton;
