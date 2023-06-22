"use client";

import { useState } from "react";
import { z } from "zod";

export type InputProps = {
  label: string;
  error?: string;
  textarea?: boolean;
  supportingLabel?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement> & React.HTMLProps<HTMLInputElement>;

type ErrorResponse = {
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
  error,
  supportingLabel,
  type,
  textarea,
  value,
  onChange,
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const schema = z.object({
    name: z.string().nonempty("Name is required"),
    email: z.string().nonempty("Email is required").email("Invalid email"),
    msg: z.string().nonempty("Message is empty"),
  });

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setIsFocused(false);
    validateValue(name, value)
  };

  const validateValue = (name: string, value:string) => {
    try {
      schema.pick({ [name]: true }).parse({ [name]: value });
      setErrorMsg(""); // No error message if validation succeeds
    } catch (error) {
      const errorObject = JSON.parse(error as string)[0]as ErrorResponse;
      setErrorMsg(errorObject.message);
    }
  };

  return (
    <div className="relative">
      {!textarea && <input
        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-600 w-full text-gray-800"
        type={type}
        id={id || name}
        value={value}
        name={name}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={onChange}
      /> }
      {textarea && <textarea
        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-600 w-full text-gray-800"
        id={id || name}
        value={value}
        name={name}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={onChange}
      />}
      {errorMsg && (
        <p className="text-red-500 text-xs">
          {errorMsg}
        </p>
      )}
      <label
        className={`absolute top-2 left-3 transition-all duration-300 transform ${
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
