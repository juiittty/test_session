import Image from "next/image";

type IconMinusProps = {
  size?: number;
  // StepButton이 disabled일 때 쓰는 회색 버전
  disabled?: boolean;
  className?: string;
};

// Figma: icon/minus — 빼기 아이콘. StepButton decrease.
export default function IconMinus({ size = 24, disabled = false, className }: IconMinusProps) {
  return (
    <Image
      src={disabled ? "/icons/icon-minus-disabled.svg" : "/icons/icon-minus.svg"}
      alt=""
      width={size}
      height={size}
      className={className}
    />
  );
}
