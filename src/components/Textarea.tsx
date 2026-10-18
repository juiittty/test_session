import { useId, type ComponentProps } from "react";
import Label from "@/components/Label";
import TextareaField from "@/components/TextareaField";
import { cn } from "@/lib/cn";

type TextareaProps = ComponentProps<typeof TextareaField> & {
  label: string;
  // 값이 있을 때만 아래에 안내 문구를 보여준다 (Figma의 showHelper)
  helper?: string;
};

// Figma: Textarea — 여러 줄 입력. rows=2는 제목(최대 2줄), rows=4는 본문.
export default function Textarea({
  label,
  helper,
  required,
  id,
  className,
  ...props
}: TextareaProps) {
  const autoId = useId();
  const textareaId = id ?? autoId;
  return (
    <div className={cn("flex w-full flex-col gap-inline-compact", className)}>
      <Label htmlFor={textareaId} required={required}>
        {label}
      </Label>
      <TextareaField id={textareaId} required={required} {...props} />
      {helper && <p className="text-caption-md text-text-tertiary">{helper}</p>}
    </div>
  );
}
