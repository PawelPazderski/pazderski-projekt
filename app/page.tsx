"use client";

import Image from "next/image";
import { useTranslate } from "@/lib/hooks/useTranslate";
import { Navigation } from "@/components/Navigation";

export default function Home() {
  const { t, dict } = useTranslate("Home");
  const { title, about01, about02 } = dict;

  return (
    <main className="flex min-h-screen max-w-screen-xl mx-auto flex-col items-center justify-start p-4 md:p-24 text-center text-sm md:text-base">
      <Navigation />
      <div 
        // className="relative flex place-items-start before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]"
        >
        <Image
          className="relative rounded-full m-12 md:m-24 w-32 md:w-48"
          src="/pp_jc_foto.png"
          alt="Pawel Pazderski Image"
          width={200}
          height={200}
          priority
        />
      </div>
      <h1 className="mb-3 text-lg">{t(title)}</h1>
      <p className="mb-3 max-w-screen-lg">{t(about01)}</p>
      <p className="mb-3 max-w-screen-lg">{t(about02)}</p>
    </main>
  );
}
