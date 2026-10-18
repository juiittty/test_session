import type { ButtonHTMLAttributes } from "react";
import IconMinus from "@/components/IconMinus";
import IconPlus from "@/components/IconPlus";
import { cn } from "@/lib/cn";

type StepButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
  icon: "minus" | "plus";
};

// Figma: StepButton — Stepper의 −/+ 버튼. 더 못 줄이면 state=disabled.
// Figma에는 plus의 disabled 아이콘이 없어서 plus는 disabled여도 같은 아이콘을 쓴다.
export default function StepButton({
  icon,
  disabled,
  type = "button",
  className,
  ...props
}: StepButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(
        "flex size-44 shrink-0 items-center justify-center rounded-control border border-border-default bg-surface-default",
        className,
      )}
      {...props}
    >
      {icon === "minus" ? <IconMinus size={20} disabled={disabled} /> : <IconPlus size={20} />}
    </button>
  );
}
