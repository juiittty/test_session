import AttendanceBadge from "@/components/AttendanceBadge";
import { cn } from "@/lib/cn";

type ResponseRowProps = {
  name: string;
  // 동반 인원 등. 불참이면 동반 인원을 넣지 않는다
  meta?: string;
  status: "yes" | "no";
  className?: string;
};

// Figma: ResponseRow — 응답 현황 목록 한 줄. name + meta + AttendanceBadge.
export default function ResponseRow({ name, meta, status, className }: ResponseRowProps) {
  return (
    <div
      className={cn(
        "flex w-full items-center gap-stack-sm rounded-card border border-border-subtle bg-surface-default p-stack-md",
        className,
      )}
    >
      <div className="flex min-w-0 flex-1 flex-col gap-inline-sm">
        <p className="truncate text-label-lg text-text-primary">{name}</p>
        {meta && <p className="truncate text-caption-md text-text-tertiary">{meta}</p>}
      </div>
      <AttendanceBadge status={status} />
    </div>
  );
}
