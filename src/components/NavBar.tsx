import type { ReactNode } from "react";
import IconNone from "@/components/IconNone";
import { cn } from "@/lib/cn";

type NavBarProps = {
  title: string;
  // 양옆 아이콘 슬롯. 없으면 빈 자리(icon/none)를 둔다
  left?: ReactNode;
  right?: ReactNode;
  className?: string;
};

// Figma: NavBar — 화면 상단 바. 가운데 title, 양옆 left/right 아이콘 슬롯.
export default function NavBar({ title, left, right, className }: NavBarProps) {
  return (
    <header className={cn("flex w-full items-center gap-section p-page-horizontal", className)}>
      {left ?? <IconNone />}
      <h1 className="min-w-0 flex-1 text-center text-heading-md text-text-primary">{title}</h1>
      {right ?? <IconNone />}
    </header>
  );
}
