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
      <div className="flex flex-row justify-between content-center border-red-800 border w-full h-10">
        <div>
          <Link href="/">
            <Image src={`/logo_${ theme === "dark" ? "light" : "dark"}.svg`} alt="Logo" width={50} height={50} className="w-10 md:w-16" />
          </Link>
        </div>
        <div className="flex gap-2">
          <ThemeToggleButton />
          <LanguageSelector />
        </div>
      </div>
    </>
  );
};
