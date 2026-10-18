"use client";

import { useState } from "react";
import StepButton from "@/components/StepButton";
import { cn } from "@/lib/cn";

type StepperProps = {
  // 폼으로 보낼 때 쓰는 이름 (숨은 input으로 값을 함께 보낸다)
  name?: string;
  defaultValue?: number;
  min?: number;
  unit?: string;
  onChange?: (value: number) => void;
  className?: string;
};

// Figma: Stepper — 동반 인원 입력(decrease · value · increase).
// 값이 최솟값이면 decrease를 disabled로 바꾼다.
export default function Stepper({
  name,
  defaultValue = 0,
  min = 0,
  unit = "명",
  onChange,
  className,
}: StepperProps) {
  const [value, setValue] = useState(defaultValue);

  function change(next: number) {
    setValue(next);
    onChange?.(next);
  }

  return (
    <div className={cn("flex items-center gap-stack-sm", className)}>
      <StepButton
        icon="minus"
        aria-label="줄이기"
        disabled={value <= min}
        onClick={() => change(value - 1)}
      />
      <span className="whitespace-nowrap text-heading-md text-text-strong" aria-live="polite">
        {value}
        {unit}
      </span>
      <StepButton icon="plus" aria-label="늘리기" onClick={() => change(value + 1)} />
      {name && <input type="hidden" name={name} value={value} />}
    </div>
  );
}
