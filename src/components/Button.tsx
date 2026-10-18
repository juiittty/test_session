import type { ButtonHTMLAttributes } from "react";

type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: ButtonSize;
};

// 글자색: 밝은 action-primary 배경(sm·lg)에는 검정 계열, 회색 배경(md)과 disabled에는 흰색
const sizeClasses: Record<ButtonSize, string> = {
  // 보이는 높이는 Figma대로 두고, 보이지 않는 터치 영역(after)을 44px로 넓힌다
  sm: "gap-control-compact py-inline-sm text-label-md bg-action-primary text-text-primary disabled:text-text-inverse after:absolute after:inset-x-0 after:top-1/2 after:h-44 after:-translate-y-1/2",
  md: "h-48 gap-inline-compact py-control-x text-label-md bg-text-secondary text-text-inverse",
  lg: "h-52 gap-control-compact py-inline-sm text-label-lg bg-action-primary text-text-primary disabled:text-text-inverse",
};

// Figma: size=sm/md/lg, state=default/hover/disabled. 필수값이 비어 있으면 disabled.
export default function Button({
  size = "sm",
  type = "button",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={[
        // 좌우 여백: Figma는 control-y(8px)지만 x/y가 바뀐 것으로 보고 control-x(12px)를 쓴다
        "relative inline-flex items-center justify-center whitespace-nowrap rounded-control px-control-x text-center",
        // hover: 원래 배경색 위에 반투명 오버레이를 덮는다
        "enabled:hover:bg-linear-to-r enabled:hover:from-action-hover-overlay enabled:hover:to-action-hover-overlay",
        "disabled:bg-border-subtle",
        sizeClasses[size],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}
