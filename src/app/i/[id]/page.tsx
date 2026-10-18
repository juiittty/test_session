import { Suspense } from "react";
import { notFound } from "next/navigation";
import Image from "@/components/Image";
import InfoRow from "@/components/InfoRow";
import InvitationCover from "@/components/InvitationCover";
import { formatEventAt } from "@/lib/format";
import { mockInvitation } from "@/lib/mock";
import RsvpSection from "./RsvpSection";

// /i/[id] — 게스트가 초대장을 보고 참석 여부를 보내는 화면
export default function InvitationPage({ params }: PageProps<"/i/[id]">) {
  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-375 flex-col bg-surface-default">
      {/* id는 요청 때 알 수 있는 값이라 Suspense 안에서 읽는다 */}
      <Suspense fallback={null}>
        {params.then(({ id }) => (
          <Invitation id={id} />
        ))}
      </Suspense>
    </div>
  );
}

function Invitation({ id }: { id: string }) {
  // TODO: Supabase를 붙이면 id로 초대장을 조회한다. 지금은 가짜 데이터 1개만 있다.
  if (id !== mockInvitation.id) notFound();
  const invitation = mockInvitation;
  const eventAt = formatEventAt(invitation.event_at);

  return (
    <>
      <InvitationCover title={invitation.title} eventAt={eventAt} place={invitation.place} />

      <div className="flex flex-col items-center gap-stack-md px-page-horizontal py-cover-inset">
        <Image type="flag" alt="" />
        <p className="w-full whitespace-pre-wrap break-words text-center text-body-compact text-text-primary">
          {invitation.body}
        </p>
      </div>

      <div className="px-page-horizontal pt-stack-lg pb-section-lg">
        <div className="flex flex-col gap-control-compact rounded-card bg-surface-subtle p-page-horizontal">
          <InfoRow label="일시" value={eventAt} />
          <InfoRow label="장소" value={invitation.place} />
        </div>
      </div>

      <RsvpSection />
    </>
  );
}
