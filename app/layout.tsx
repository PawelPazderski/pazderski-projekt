"use client";

import "./globals.css";
import { useEffect } from "react";
import { Montserrat } from "next/font/google";
import { Navigation } from "@/components/Navigation";
import { ToastHoast } from "@/components/Toast";
import { languageAtom, themeAtom } from "@/store";
import { useSetAtom } from "jotai";
import { useLocalStorage } from "@/lib/hooks/useLocalStorage";
import ThemeCSS from "./Theme.style";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Pazderski Projekt",
  description: "Portfolio page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const setLanguage = useSetAtom(languageAtom);
  const setTheme = useSetAtom(themeAtom);

  const [lang] = useLocalStorage("lang", "en");
  const [theme] = useLocalStorage("theme", "dark");

  useEffect(() => {
    setLanguage(lang);
  }, [setLanguage, lang]);

  useEffect(() => {
    setTheme(theme);
  }, [setTheme, theme]);

  return (
    <html lang="en">
      <ThemeCSS />
      <body className={montserrat.className}>
        <ToastHoast />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
