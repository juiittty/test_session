import Image from "next/image";

type IconPlusProps = {
  size?: number;
  className?: string;
};

// Figma: icon/plus — 더하기 아이콘. StepButton increase.
export default function IconPlus({ size = 24, className }: IconPlusProps) {
  return (
    <Image src="/icons/icon-plus.svg" alt="" width={size} height={size} className={className} />
  );
}
