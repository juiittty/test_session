import NextImage from "next/image";
import { cn } from "@/lib/cn";

type ImageType = "character" | "flag";

type ImageProps = {
  type?: ImageType;
  // 꾸밈용이면 빈 문자열("")을 넘긴다
  alt: string;
  className?: string;
};

const images: Record<ImageType, { src: string; size: number; className: string }> = {
  character: { src: "/images/image-character.png", size: 201, className: "size-201" },
  flag: { src: "/images/image-flag.png", size: 48, className: "size-48 rounded-scaled-media" },
};

// Figma: Image — type=character(대표 캐릭터) · flag(깃발)
export default function Image({ type = "character", alt, className }: ImageProps) {
  const image = images[type];
  return (
    <NextImage
      src={image.src}
      alt={alt}
      width={image.size}
      height={image.size}
      className={cn("shrink-0 object-cover", image.className, className)}
    />
  );
}
