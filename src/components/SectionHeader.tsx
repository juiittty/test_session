import { cn } from "@/lib/cn";

type SectionHeaderProps = {
  subtitle?: string;
  title?: string;
  description?: string;
  // inverse: 어두운 배경(InvitationCover) 위에서 흰 글자로 쓴다
  variant?: "default" | "inverse";
  className?: string;
};

// Figma: SectionHeader — 섹션 제목 묶음(subtitle · title · description).
// 필요 없는 줄은 값을 넘기지 않으면 숨겨진다. (Figma의 show* 속성)
// 입력한 줄바꿈은 그대로 보여준다.
export default function SectionHeader({
  subtitle,
  title,
  description,
  variant = "default",
  className,
}: SectionHeaderProps) {
  const inverse = variant === "inverse";
  return (
    <div className={cn("flex w-full flex-col items-center gap-stack-md text-center", className)}>
      {subtitle && (
        <p
          className={cn(
            "w-full text-label-md",
            inverse ? "text-text-inverse opacity-60" : "text-action-secondary",
          )}
        >
          {subtitle}
        </p>
      )}
      {title && (
        <h2
          className={cn(
            "w-full whitespace-pre-line text-title-lg",
            inverse ? "text-text-inverse" : "text-text-primary",
          )}
        >
          {title}
        </h2>
      )}
      {description && (
        <p
          className={cn(
            "w-full whitespace-pre-line text-body-md",
            inverse ? "text-text-inverse" : "text-text-primary",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
