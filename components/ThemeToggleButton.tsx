'use client'

import { useAtom } from 'jotai';
import { themeAtom } from '@/store';
import "material-symbols";

function ThemeToggleButton() {
  const [theme, setTheme] = useAtom(themeAtom);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <button onClick={toggleTheme} className="self-end">
      {theme === 'light' ? <span className="material-symbols-rounded">dark_mode</span> : <span className="material-symbols-rounded">wb_sunny</span>}
    </button>
  );
}

export default ThemeToggleButton;
