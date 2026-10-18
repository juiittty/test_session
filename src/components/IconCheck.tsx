import Image from "next/image";

type IconCheckProps = {
  size?: number;
  className?: string;
};

// Figma: icon/check — 체크 아이콘.
export default function IconCheck({ size = 24, className }: IconCheckProps) {
  return (
    <Image src="/icons/icon-check.svg" alt="" width={size} height={size} className={className} />
  );
}
