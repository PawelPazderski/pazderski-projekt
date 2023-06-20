"use client";

import Image from "next/image";
import Link from "next/link";
import ThemeToggleButton from "@/components/ThemeToggleButton";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useAtom } from 'jotai';
import { themeAtom } from '@/store';
import { useTranslate } from "@/lib/hooks/useTranslate";

export const Navigation = () => {
  const [theme] = useAtom(themeAtom);

  return (
    <>
    <div className={`w-screen p-3 bg-zinc-${theme === "dark" ? "800" : "200"}`}>
      <div className="flex flex-row justify-between content-center max-w-screen-lg mx-auto px-3">
        <div>
          <Link href="/">
            <Image src={`/logo_${ theme === "dark" ? "light" : "dark"}.svg`} alt="Logo" width={50} height={50} className="w-10 md:w-16" />
          </Link>
        </div>
        <div className="flex flex-col justify-start content-start gap-1.5">
          <ThemeToggleButton />
          <LanguageSelector />
        </div>
      </div>
    </div>
    </>
  );
};
