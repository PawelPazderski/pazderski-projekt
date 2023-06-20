"use client";

import { useAtom } from "jotai";
import { Language, languageAtom } from "@/store";
import { useLocalStorage } from "@/lib/hooks/useLocalStorage";
import Image from "next/image";

export const LanguageSelector = () => {
  const [language, setLanguage] = useAtom(languageAtom);
  const [, setLang] = useLocalStorage("lang", "en");

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    setLang(lang);
  };

  return (
    <>
      {language === "en" && (
        <button
          className={`rounded-md self-center`}
          onClick={() => changeLanguage("pl" as Language)}
        >
          <Image
            className="rounded"
            src="/flags/pl.svg"
            alt="polish"
            width={24}
            height={24}
          />
        </button>
      )}
      {language === "pl" && (
        <button
          className={`rounded-md self-center`}
          onClick={() => changeLanguage("en" as Language)}
        >
          <Image
            className="rounded"
            src="/flags/en.svg"
            alt="english"
            width={24}
            height={24}
          />
        </button>
      )}
    </>
  );
};
