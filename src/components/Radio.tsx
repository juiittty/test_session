import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type RadioProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

// Figma: Radio — state=default/selected/disabled. 보통 RadioOption 안에서 쓴다.
// 실제 <input type="radio">를 투명하게 덮어 두고, checked·disabled 상태에 따라 모양을 바꾼다.
export default function Radio({ className, ...props }: RadioProps) {
  return (
    <span
      className={cn("group relative flex size-48 shrink-0 items-center justify-center", className)}
    >
      <input type="radio" className="peer absolute inset-0 m-0 cursor-pointer opacity-0" {...props} />
      <span className="pointer-events-none flex size-20 items-center justify-center rounded-pill bg-text-tertiary group-has-checked:bg-action-primary group-has-disabled:bg-text-disabled">
        <span className="size-16 rounded-pill bg-surface-default group-has-checked:size-8" />
      </span>
    </span>
  );
}
