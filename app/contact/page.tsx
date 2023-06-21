"use client";

import { useState } from 'react';

export default function Contact() {
  const [isFocused, setIsFocused] = useState(false);
  const [name, setName] = useState("");

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };


  return (
    <main className="mx-auto px-2.5 max-w-screen-lg py-10 text-center">
      <h1 className="mb-3 text-lg font-bold tracking-wider">Kontakt</h1>
      <form className="flex flex-col gap-5 mx-auto max-w-screen-md">
        <div className="relative">
          <input
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-600 w-full text-gray-800"
            type="text"
            id="input1"
            value={name}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={e => setName(e.target.value)}
            required
          />
          <label
            className={`absolute top-2 left-3 transition-all duration-300 transform ${
              isFocused || name ? '-translate-y-7 text-sm' : 'translate-y-0 text-base'
            } text-gray-400`}
            htmlFor="input1"
          >
          Name
          </label>
        </div>
      </form>
    </main>
  );
}
