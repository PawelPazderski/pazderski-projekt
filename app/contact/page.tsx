"use client";

import { useState } from "react";
import { Input } from "@/components/Input";

export default function Contact() {
  const [userName, setUserName] = useState("");
  const [mail, setMail] = useState("");
  const [msg, setMsg] = useState("");

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log({name: userName, email: mail, msg: msg});
  };

  return (
    <main className="mx-auto px-2.5 max-w-screen-lg py-10 text-center">
      <h1 className="mb-5 text-lg font-bold tracking-wider">Kontakt</h1>
      <form
        className="flex flex-col gap-6 mx-auto max-w-screen-sm"
        onSubmit={submitForm}
      >
        <Input
          value={userName}
          name="name"
          label="Name"
          onChange={(e) => setUserName(e.currentTarget.value)}
        />
        <Input
          value={mail}
          name="email"
          label="Mail"
          onChange={(e) => setMail(e.currentTarget.value)}
        />
        <Input
          value={msg}
          name="msg"
          label="Message"
          onChange={(e) => setMsg(e.currentTarget.value)}
          textarea
        />
        <button
          type="submit"
          className="bg-gray-400 hover:bg-yellow-600 font-bold py-2 px-4 rounded"
        >
          Send
        </button>
      </form>
    </main>
  );
}
