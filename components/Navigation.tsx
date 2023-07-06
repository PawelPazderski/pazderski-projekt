"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fade as Hamburger } from "hamburger-react";
import ThemeToggleButton from "@/components/ThemeToggleButton";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useAtom } from "jotai";
import { themeAtom } from "@/store";
import { useTranslate } from "@/lib/hooks/useTranslate";
import useClickOutside from "@/lib/hooks/useClickOutside";

export const Navigation = () => {
  const [theme] = useAtom(themeAtom);
  const { t, dict } = useTranslate("Home");
  const { menu } = dict;
  const pathname = usePathname();
  const [isOpen, setOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => {
    return pathname === path || (path != "/" && pathname.includes(path)) ? "active" : "";
  };

  const closeMenu = () => {
    setOpen(false);
  };

  useClickOutside(menuRef, closeMenu, [buttonRef]);

  const menuItems = [
    {
      id: 1,
      name: t(menu.home),
      link: "/",
    },
    {
      id: 2,
      name: t(menu.portfolio),
      link: "/portfolio",
    },
    {
      id: 3,
      name: t(menu.contact),
      link: "/contact",
    },
  ];

  return (
    <>
      <div
        className={`${
          theme === "dark" ? "md:bg-neutral-800" : "md:bg-neutral-200"
        } w-screen p-3 pt-5`}
      >
        <div className="flex flex-row justify-between content-center max-w-screen-lg mx-auto px-3">
          <div>
            <Link href="/">
              <Image
                src={`/logo_${theme === "dark" ? "light" : "dark"}.svg`}
                alt="Logo"
                width={0}
                height={0}
                className="w-10 md:w-12 h-auto"
              />
            </Link>
          </div>
          <div>
            <div className="hidden md:flex justify-end content-start gap-3">
              <ThemeToggleButton />
              <LanguageSelector />
            </div>
            <div className="flex gap-3 text-sm uppercase">
              <ul className="hidden md:flex gap-3 text-sm uppercase ">
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      className={`${isActive(item.link)} hover:text-yellow-400`}
                      href={item.link}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              {/* mobile menu */}
              <div ref={buttonRef} className="md:hidden relative z-20">
                <Hamburger
                  toggled={isOpen}
                  toggle={setOpen}
                  rounded
                  size={28}
                />
              </div>
              <div
                ref={menuRef}
                className={`md:hidden fixed top-0 right-0 h-full w-52 pt-20 text-center ${
                  theme === "dark" ? "bg-neutral-800" : "bg-neutral-200"
                } z-10 transform duration-300 transition-transform ${
                  isOpen ? "translate-x-0" : "translate-x-full"
                }`}
              >
                <ul className="flex flex-col gap-5 mb-5 text-sm uppercase">
                  {menuItems.map((item) => (
                    <li key={item.id}>
                      <Link
                          className={`${isActive(
                          item.link
                        )} hover:text-yellow-400`}
                        href={item.link}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center content-center gap-3">
                  <ThemeToggleButton />
                  <LanguageSelector />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
