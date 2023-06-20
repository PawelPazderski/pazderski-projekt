import { atom } from "jotai";

export type Language = "en" | "pl";

export const themeAtom = atom<string>("light");
export const languageAtom = atom<Language>("en");
