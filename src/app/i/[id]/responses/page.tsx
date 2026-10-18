import { Suspense } from "react";
import { notFound } from "next/navigation";
import EmptyState from "@/components/EmptyState";
import NavBar from "@/components/NavBar";
import ResponseRow from "@/components/ResponseRow";
import SectionHeader from "@/components/SectionHeader";
import StatCard from "@/components/StatCard";
import { formatEventAt, formatRespondedAt } from "@/lib/format";
import { mockInvitation, mockResponses, type InvitationResponse } from "@/lib/mock";
import CopyInvitationLinkButton from "./CopyInvitationLinkButton";

// /i/[id]/responses — 호스트가 응답 목록과 참석 현황을 확인하는 화면
export default function ResponsesPage({ params }: PageProps<"/i/[id]/responses">) {
  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-375 flex-col gap-page-horizontal bg-surface-default">
      <NavBar title="응답 현황" />
      {/* id는 요청 때 알 수 있는 값이라 Suspense 안에서 읽는다 */}
      <Suspense fallback={null}>
        {params.then(({ id }) => (
          <Responses id={id} />
        ))}
      </Suspense>
    </div>
  );
}

function Responses({ id }: { id: string }) {
  // TODO: Supabase를 붙이면 id로 초대장과 응답을 조회한다. 지금은 가짜 데이터를 쓴다.
  if (id !== mockInvitation.id) notFound();
  const invitation = mockInvitation;
  const responses = mockResponses.filter((response) => response.invitation_id === id);

  const attending = responses.filter((response) => response.attending);
  const notAttendingCount = responses.length - attending.length;
  // 참석 인원 합계 = 참석한 사람 + 그 사람들의 동반 인원
  const headcount = attending.reduce((sum, response) => sum + 1 + response.companions, 0);

  return (
    <main className="flex flex-col gap-section-lg px-page-horizontal pb-cover-inset">
      <SectionHeader
        subtitle="Responses"
        title={invitation.title.replace(/\n/g, " ")}
        description={`${formatEventAt(invitation.event_at)} · ${invitation.place}`}
      />

      <div className="flex gap-inline-md">
        <StatCard label="참석" value={`${attending.length}명`} className="min-w-0 flex-1" />
        <StatCard label="불참" value={`${notAttendingCount}명`} className="min-w-0 flex-1" />
        <StatCard label="참석 인원 합계" value={`${headcount}명`} highlight className="min-w-0 flex-1" />
      </div>

      <p className="text-caption-md text-text-tertiary">참석 인원 합계 = 참석한 사람 + 동반 인원</p>

      <section className="flex flex-col gap-inline-md">
        <h2 className="text-heading-md text-text-strong">응답 목록</h2>
        {responses.length === 0 ? (
          <EmptyState
            title="아직 응답이 없어요"
            description="초대장 링크를 공유하면 응답이 여기에 쌓여요."
          />
        ) : (
          responses.map((response) => (
            <ResponseRow
              key={response.id}
              name={response.name}
              meta={responseMeta(response)}
              status={response.attending ? "yes" : "no"}
            />
          ))
        )}
      </section>

      <CopyInvitationLinkButton id={invitation.id} />
    </main>
  );
}

// 참석이면 "동반 1명 · 10월 12일 14:03", 불참이면 응답 시각만 보여준다
function responseMeta(response: InvitationResponse) {
  const respondedAt = formatRespondedAt(response.created_at);
  return response.attending ? `동반 ${response.companions}명 · ${respondedAt}` : respondedAt;
}
