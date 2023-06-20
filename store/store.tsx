import { atom } from "jotai";

export type Language = "en" | "pl";

export const themeAtom = atom<string>("dark");
export const languageAtom = atom<Language>("en");
