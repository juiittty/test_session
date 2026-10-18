import { cn } from "@/lib/cn";

type AttendanceBadgeProps = {
  status: "yes" | "no";
  className?: string;
};

// Figma: AttendanceBadge — 참석 여부 배지. status=yes 참석 · no 불참.
export default function AttendanceBadge({ status, className }: AttendanceBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 whitespace-nowrap rounded-pill px-control-compact py-inline-sm text-label-md",
        status === "yes" ? "bg-info-subtle text-info-strong" : "bg-background-subtle text-text-secondary",
        className,
      )}
    >
      {status === "yes" ? "참석" : "불참"}
    </span>
  );
}
