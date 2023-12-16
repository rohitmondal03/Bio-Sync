import classNames from "classnames";
import dynamic from "next/dynamic";
import { type ChangeEvent } from "react";

const Input = dynamic(() => import("@/components/ui/input").then((mod) => mod.Input))
const Textarea = dynamic(() => import("@/components/ui/textarea").then((mod) => mod.Textarea))
const Label = dynamic(() => import("@/components/ui/label").then((mod) => mod.Label))


type TInputFieldsProps = {
  label: string;
  id: string;
  placeholder: string;
  widthClass: string;
  inputType: "Input" | "Textarea";
  value: string;
  required: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}


export default function InputFields({
  value,
  onChange,
  label,
  id,
  placeholder,
  inputType,
  widthClass,
  required
}: TInputFieldsProps
) {
  return (
    <div className={classNames(`${widthClass}`, {
      "border border-zinc-700 dark:border-zinc-500 rounded-lg": true,
      "p-4 space-y-2": true,
    })}>
      <Label
        htmlFor={id}
        className="font-bold text-md"
      >
        {label}
      </Label>

      {inputType === "Input" ? (
        <Input
          id={label}
          placeholder={placeholder}
          autoComplete="off"
          value={value}
          onChange={onChange}
          required={required}
        />
      ) : (
        <Textarea
          id={label}
          placeholder={placeholder}
          value={value}
          rows={7}
          onChange={onChange}
          required={required}
        />
      )}
    </div>
  )
}