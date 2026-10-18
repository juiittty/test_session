import type { ComponentProps } from "react";
import Label from "@/components/Label";
import Radio from "@/components/Radio";
import { cn } from "@/lib/cn";

type RadioOptionProps = ComponentProps<typeof Radio> & {
  label: string;
};

// Figma: RadioOption — 라디오 + 라벨 한 줄. 참석/불참 선택에 쓴다.
// 글자를 눌러도 라디오가 선택되도록 전체를 <label>로 감싼다.
export default function RadioOption({ label, className, ...props }: RadioOptionProps) {
  return (
    <label className={cn("flex cursor-pointer items-center", className)}>
      <Radio {...props} />
      <Label as="span">{label}</Label>
    </label>
  );
}
