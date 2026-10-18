import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type LabelProps = {
  children: ReactNode;
  required?: boolean;
  htmlFor?: string;
  // 다른 <label> 안에 들어갈 때는 span으로 그린다 (label 중첩 금지)
  as?: "label" | "span";
  className?: string;
};

// Figma: Label — 입력 필드 위 라벨. required를 켜면 "필수" 표시가 붙는다.
export default function Label({
  children,
  required = false,
  htmlFor,
  as: Tag = "label",
  className,
}: LabelProps) {
  return (
    <Tag
      htmlFor={Tag === "label" ? htmlFor : undefined}
      className={cn("flex items-center gap-inline-sm whitespace-nowrap", className)}
    >
      <span className="text-label-lg text-text-strong">{children}</span>
      {required && <span className="text-caption-md text-feedback-error">필수</span>}
    </Tag>
  );
}
