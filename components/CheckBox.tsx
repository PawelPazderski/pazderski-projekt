import React from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import { useTranslate } from "@/lib/hooks/useTranslate";

type CheckboxProps = {
  checked: boolean;
  disagreed: string;
  onCheckedChange: ((checked: boolean) => void);
}

const FormCheckbox = ( { checked, disagreed, onCheckedChange }: CheckboxProps ) => { 
  const { t, dict } = useTranslate("Contact");
  const { form } = dict;
  
  return (
  <div>
    <div className="flex items-center gap-4">
      <Checkbox.Root
        className={`shrink-0 self-start border ${(disagreed && disagreed.length > 0) ? "border-red-500" : "border-gray-300"} flex h-[25px] w-[25px] mt-[5px] appearance-none items-center justify-center rounded-[4px] text-gray-800 bg-white outline-none hover:border-yellow-600`}
        onCheckedChange={onCheckedChange}
        checked={checked}
        id="c1"
      >
        <Checkbox.Indicator>
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label className="text-[15px] text-left" htmlFor="c1">
        {t(form.agreeInfo)}
      </label>
    </div>
    <p className="text-red-500 text-xs mt-[5px]">
          {(disagreed && disagreed.length > 0) ? disagreed : "\u00A0"}
        </p>
  </div>
    
);
}

export default FormCheckbox;
