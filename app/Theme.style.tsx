// components/CustomCSS.js
'use client'

import { useAtom } from 'jotai';
import { themeAtom } from './../store';

function ThemeCSS() {
  const [theme] = useAtom(themeAtom);

  return (
    <style jsx global>{`
      :root {
        --foreground-rgb: ${theme === 'light' ? '0, 0, 0' : '255, 255, 255'};
        --background-start-rgb: ${theme === 'light' ? '214, 219, 220' : '50, 50, 50'};
        --background-end-rgb: ${theme === 'light' ? '255, 255, 255' : '50, 50, 50'};
        --background-rgb: ${theme === 'light' ? '240, 240, 240' : '50, 50, 50'};
        --border-rgb: ${theme === 'light' ? '50, 50, 50' : '205, 205, 205'};
      }

      body {
        color: rgb(var(--foreground-rgb));
        /* background: linear-gradient(
          to bottom,
          transparent,
          rgb(var(--background-end-rgb))
        )
          rgb(var(--background-start-rgb)); */
          background: rgb(var(--background-rgb));
      }

      button {
        color: ${theme === 'light' ? '150, 150, 150' : '205, 205, 205'};

        &:hover {
          border-color: rgb(237, 206, 7);
          color: rgb(237, 206, 7);
        }
      }
    `}</style>
  );
}

export default ThemeCSS;
