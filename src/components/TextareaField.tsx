import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type TextareaFieldProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "rows"> & {
  rows?: 2 | 4;
};

const heightClasses = {
  2: "h-72",
  4: "h-120",
};

// Figma: TextareaField — 여러 줄 입력 박스. Textarea 안에서 쓴다.
// state=default(빈 칸)는 placeholder, focus는 :focus, active(값 있음)는 입력한 글자로 표현된다.
export default function TextareaField({ rows = 4, className, ...props }: TextareaFieldProps) {
  return (
    <textarea
      rows={rows}
      className={cn(
        "w-full resize-none rounded-control border border-border-subtle bg-surface-default px-stack-md py-control-x text-body-lg text-text-primary outline-none placeholder:text-text-disabled focus:border-action-primary",
        heightClasses[rows],
        className,
      )}
      {...props}
    />
  );
}
