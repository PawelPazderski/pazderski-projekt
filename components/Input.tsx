"use client";

import { useState, useEffect } from "react";
import { z } from "zod";
import { useAtom } from "jotai";
import { themeAtom } from "@/store";
import { useTranslate } from "@/lib/hooks/useTranslate";

export type InputProps = {
  label: string;
  errors: Record<string, string> | null;
  textarea?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement> & React.HTMLProps<HTMLInputElement>;

export type ErrorResponse = {
  code: string;
  minimum: number;
  type: string;
  inclusive: boolean;
  exact: boolean;
  message: string;
  path: string[];
};

export const Input = ({
  label,
  name,
  id,
  errors,
  type,
  textarea,
  value,
  onChange,
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const [errorMsg, setErrorMsg] = useState<Record<string, string> | null>(null);

  const [theme] = useAtom(themeAtom);
  const { t, dict } = useTranslate("Contact");
  const { formErrors } = dict;

  const schema = z.object({
    name: z.string().nonempty(t(formErrors.emptyName)).min(2, t(formErrors.shortName)),
    email: z.string().nonempty(t(formErrors.emptyEmail)).email(t(formErrors.invalidEmail)),
    msg: z.string().nonempty(t(formErrors.emptyMsg)).min(10, t(formErrors.shortMsg)).max(250, t(formErrors.longMsg)),
  });

  useEffect(() => {
    setErrorMsg(errors)
  }, [errors])

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    setIsFocused(false);
    setIsTouched(true);
    validateValue(name, value);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    if (onChange) {
      onChange(event);
    };

    if (isTouched) {
      validateValue(name, value);
    };
  }

  const validateValue = (name: string, value:string) => {

    try {
      schema.pick({ [name]: true }).parse({ [name]: value });
      setErrorMsg(prev => (
        { 
          ...prev,
          [name]: ""
        }));; // No error message if validation succeeds
    } catch (error) {
      const errorObject = JSON.parse(error as string)[0]as ErrorResponse;
      setErrorMsg(prev => (
        { 
          ...prev,
          [name]: errorObject.message
        }));
    }
  };

  return (
    <div className="relative">
      {!textarea && <input
        className={`px-3 py-2 mb-1 border ${(errorMsg && errorMsg[name as string]) ? "border-red-500" :"border-gray-300"} rounded-md focus:outline-none focus:border-yellow-600 w-full text-gray-800`}
        type={type}
        id={id || name}
        value={value}
        name={name}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
      /> }
      {textarea && <textarea
        className={`px-3 py-2 border ${(errorMsg && errorMsg[name as string]) ? "border-red-500" :"border-gray-300"} rounded-md focus:outline-none focus:border-yellow-600 w-full text-gray-800 resize-none`}
        id={id || name}
        value={value}
        name={name}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        rows={4}
      />}
        <p className="text-red-500 text-xs">
          {(errorMsg && errorMsg[name ?? ""]) ? errorMsg[name ?? ""] : "\u00A0"}
        </p>

      <label
        className={`cursor-text absolute top-2 left-3 transition-all duration-300 transform ${
          isFocused || value
            ? "-translate-y-7 text-sm"
            : "translate-y-0 text-base"
        } text-gray-400`}
        htmlFor={id || name}
      >
        {label}
      </label>
    </div>
  );
};
