import Image from "next/image";
import { cn } from "@/lib/cn";

// Figma: SuccessIcon — 완료 표시 아이콘(체크). 발행 완료·참석 신청 완료 상태에서 쓴다.
export default function SuccessIcon({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "flex size-64 shrink-0 items-center justify-center rounded-pill bg-info-subtle",
        className,
      )}
    >
      <Image src="/icons/icon-check-success.svg" alt="" width={32} height={32} />
    </span>
  );
}
