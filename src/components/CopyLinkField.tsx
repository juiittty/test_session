"use client";

import Button from "@/components/Button";
import InputField from "@/components/InputField";
import { cn } from "@/lib/cn";

type CopyLinkFieldProps = {
  title: string;
  url: string;
  description?: string;
  className?: string;
};

// Figma: CopyLinkField — 발행 후 공유할 링크 한 줄(title · 링크 field · 복사 버튼 · description).
// 초대장 링크와 응답 현황 링크에 두 번 쓴다.
export default function CopyLinkField({ title, url, description, className }: CopyLinkFieldProps) {
  return (
    <div
      className={cn(
        "flex w-full flex-col gap-inline-md rounded-card bg-surface-subtle p-stack-md",
        className,
      )}
    >
      <p className="text-label-lg text-text-strong">{title}</p>
      <div className="flex w-full items-center gap-inline-md">
        <InputField readOnly value={url} aria-label={title} className="min-w-0 flex-1" />
        <Button size="sm" onClick={() => navigator.clipboard.writeText(url)}>
          복사
        </Button>
      </div>
      {description && <p className="text-caption-md text-text-tertiary">{description}</p>}
    </div>
  );
}
