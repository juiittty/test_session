import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement>;

// Figma: InputField — 한 줄 입력 박스.
// state=default(빈 칸)는 placeholder, focus는 :focus, active(값 있음)는 입력한 글자로 표현된다.
export default function InputField({ className, ...props }: InputFieldProps) {
  return (
    <input
      className={cn(
        "h-45 w-full rounded-control border border-border-subtle bg-surface-default px-stack-md text-body-lg text-text-primary outline-none placeholder:text-text-disabled focus:border-action-primary",
        className,
      )}
      {...props}
    />
  );
}
