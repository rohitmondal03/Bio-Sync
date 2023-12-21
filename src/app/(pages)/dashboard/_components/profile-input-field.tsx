import dynamic from "next/dynamic";
import { type ChangeEvent } from "react";
import classNames from "classnames";
import { type LucideIcon } from "lucide-react";

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
  Icon: LucideIcon
}


export default function InputFields({
  value,
  onChange,
  label,
  id,
  placeholder,
  inputType,
  widthClass,
  required,
  Icon,
}: TInputFieldsProps
) {
  return (
    <div className={classNames(`${widthClass}`, {
      "border border-zinc-700 dark:border-zinc-500 rounded-lg": true,
      "p-4 space-y-4": true,
    })}>
      <Label
        htmlFor={id}
        className="font-bold text-md"
      >
        {label}
      </Label>

      <div className={classNames({
        "flex flex-row items-center justify-center gap-2": true,
      })}>
        <Icon className="scale-90" />

        {inputType === "Input" ? (
          <Input
            id={label}
            placeholder={placeholder}
            autoComplete="off"
            value={value}
            onChange={onChange}
            required={required}
            className="placeholder:font-bold"
            />
            ) : (
          <Textarea
            id={label}
            placeholder={placeholder}
            value={value}
            rows={7}
            onChange={onChange}
            required={required}
            className="placeholder:font-bold"
          />
        )}
      </div>
    </div>
  )
}