import { useId, type InputHTMLAttributes } from "react";
import InputField from "@/components/InputField";
import Label from "@/components/Label";
import { cn } from "@/lib/cn";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  // 값이 있을 때만 아래에 안내 문구를 보여준다 (Figma의 showHelper)
  helper?: string;
};

// Figma: Input — 라벨 + 한 줄 입력 박스 + 안내 문구 묶음. 일시·장소·이름처럼 한 줄 값에 쓴다.
export default function Input({ label, helper, required, id, className, ...props }: InputProps) {
  const autoId = useId();
  const inputId = id ?? autoId;
  return (
    <div className={cn("flex w-full flex-col gap-inline-compact", className)}>
      <Label htmlFor={inputId} required={required}>
        {label}
      </Label>
      <InputField id={inputId} required={required} {...props} />
      {helper && <p className="text-caption-md text-text-tertiary">{helper}</p>}
    </div>
  );
}
