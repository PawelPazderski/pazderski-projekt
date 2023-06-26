"use client";

import { useState, useEffect, useRef } from "react";
import { z } from "zod";
import { useAtom } from "jotai";
import emailjs from '@emailjs/browser';
import { languageAtom } from "@/store";
import { useTranslate } from "@/lib/hooks/useTranslate";
import { useToast } from "@/components/Toast";
import { Input, ErrorResponse } from "@/components/Input";


export default function Contact() {
  const [userName, setUserName] = useState("");
  const [mail, setMail] = useState("");
  const [msg, setMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState<Record<string, string> | null>({});

  const formRef = useRef<HTMLFormElement | null>(null);
  const [lang] = useAtom(languageAtom);
  const { t, dict } = useTranslate("Contact");
  const showToast = useToast();
  const { title, form, formErrors, toastInfo } = dict;

  const userData = { name: userName, email: mail, msg: msg };

  useEffect(() => {
    setErrorMsg({})
  }, [lang])

  const schema = z.object({
    name: z.string().nonempty(t(formErrors.emptyName)).min(2, t(formErrors.shortName)),
    email: z.string().nonempty(t(formErrors.emptyEmail)).email(t(formErrors.invalidEmail)),
    msg: z.string().nonempty(t(formErrors.emptyMsg)).min(10, t(formErrors.shortMsg)).max(250, t(formErrors.longMsg)),
  });

  let errors = [];

  const validateValue = (name: string, value:string) => {
    try {
      schema.pick({ [name]: true }).parse({ [name]: value });
      setErrorMsg(prev => (
        { 
          ...prev,
          [name]: ""
        })); // No error message if validation succeeds
      errors = [];
    } catch (error) {
      const errorObject = JSON.parse(error as string)[0] as ErrorResponse;
      setErrorMsg(prev => (
        { 
          ...prev,
          [name]: errorObject.message
        }));
      errors.push(errorObject.message)
    }
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    for (const [key, value] of Object.entries(userData)) {
      validateValue(key, value);
    }

    if (errors.length > 0) {
      console.log("Errors in form");
      return
    }

    console.log("Success");
    setUserName("");
    setMail("");
    setMsg("");

    showToast({ variant: "confirm", message: t(toastInfo.confirm) });

    // emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID as string, process.env.NEXT_PUBLIC_TEMPLATE_ID as string, formRef.current as HTMLFormElement, process.env.NEXT_PUBLIC_KEY as string)
    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });
    
  };
  
  return (
    <main className="mx-auto px-2.5 max-w-screen-lg py-10 text-center">
      <h1 className="mb-5 text-lg font-bold tracking-wider">{t(title)}</h1>
      <form
        className="flex flex-col gap-5 mx-auto max-w-screen-sm"
        onSubmit={submitForm}
        ref={formRef}
      >
        <Input
          value={userName}
          name="name"
          label={t(form.name)}
          errors={errorMsg}
          onChange={(e) => {setUserName(e.currentTarget.value)}}
        />
        <Input
          value={mail}
          name="email"
          label={t(form.email)}
          errors={errorMsg}
          onChange={(e) => setMail(e.currentTarget.value)}
        />
        <Input
          value={msg}
          name="msg"
          label={t(form.msg)}
          errors={errorMsg}
          onChange={(e) => setMsg(e.currentTarget.value)}
          textarea
        />
        <button
          type="submit"
          className="disabled:bg-gray-200 disabled:hover:bg-gray-200 bg-gray-400 hover:bg-yellow-600 font-bold py-2 px-4 rounded"
        >
          {t(form.button)}
        </button>
      </form>
    </main>
  );
}
