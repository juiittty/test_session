import { cn } from "@/lib/cn";

type InfoRowProps = {
  label: string;
  value: string;
  type?: "inline" | "spread";
  className?: string;
};

// Figma: InfoRow — 라벨-값 한 줄. type=inline 붙여서 · spread 양끝 정렬.
export default function InfoRow({ label, value, type = "inline", className }: InfoRowProps) {
  if (type === "spread") {
    return (
      <div className={cn("flex w-full items-center gap-control-compact", className)}>
        <span className="shrink-0 whitespace-nowrap text-body-md text-text-secondary">{label}</span>
        <span className="min-w-0 flex-1 text-right text-label-md text-text-strong">{value}</span>
      </div>
    );
  }

  return (
    <div className={cn("flex items-center gap-control-compact", className)}>
      <span className="shrink-0 whitespace-nowrap text-label-lg text-text-secondary">{label}</span>
      <span aria-hidden className="h-14 w-px shrink-0 bg-border-default" />
      <span className="min-w-0 text-label-lg text-text-strong">{value}</span>
    </div>
  );
}
