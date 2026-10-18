import Image from "@/components/Image";
import SectionHeader from "@/components/SectionHeader";
import { cn } from "@/lib/cn";

type InvitationCoverProps = {
  subtitle?: string;
  title: string;
  eventAt: string;
  place: string;
  className?: string;
};

// Figma: InvitationCover — 초대장 상단 커버(대표 이미지 + 제목).
// /create 미리보기와 /i/[id]에서 같은 컴포넌트를 쓴다.
export default function InvitationCover({
  subtitle,
  title,
  eventAt,
  place,
  className,
}: InvitationCoverProps) {
  return (
    <section
      className={cn(
        "flex w-full flex-col items-center justify-center gap-page-horizontal bg-linear-to-b from-cover-gradient-preserved-3 to-cover-gradient-preserved-4 px-page-horizontal py-cover-inset",
        className,
      )}
    >
      <SectionHeader variant="inverse" subtitle={subtitle} title={title} />
      <Image type="character" alt="" />
      <CoverDetail label="일시" value={eventAt} />
      <CoverDetail label="장소" value={place} />
    </section>
  );
}

function CoverDetail({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex w-full flex-col items-center gap-inline-md">
      <span className="rounded-control bg-info-subtle px-inline-compact py-inline-xs text-caption-md font-semibold text-info-strong">
        {label}
      </span>
      <p className="w-full text-center text-label-md text-text-inverse">{value}</p>
    </div>
  );
}
