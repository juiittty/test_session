"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import CopyLinkField from "@/components/CopyLinkField";
import Image from "@/components/Image";
import InfoRow from "@/components/InfoRow";
import Input from "@/components/Input";
import InvitationCover from "@/components/InvitationCover";
import Label from "@/components/Label";
import NavBar from "@/components/NavBar";
import SuccessIcon from "@/components/SuccessIcon";
import Textarea from "@/components/Textarea";
import { mockInvitation } from "@/lib/mock";

const TITLE_MAX_LINES = 2;

export default function CreateInvitation() {
  const [title, setTitle] = useState("");
  const [eventAt, setEventAt] = useState("");
  const [place, setPlace] = useState("");
  const [body, setBody] = useState("");
  const [publishedId, setPublishedId] = useState<string | null>(null);

  // 필수값이 하나라도 비어 있으면 발행 버튼을 비활성화한다
  const canPublish = [title, eventAt, place, body].every((value) => value.trim() !== "");

  // TODO: Supabase를 붙이면 서버에서 저장하고, 추측할 수 없는 무작위 ID를 받아온다.
  // 지금은 저장하지 않고, 화면 흐름 확인을 위해 가짜 초대장(mock) ID로 연결한다.
  function publish() {
    if (!canPublish) return;
    setPublishedId(mockInvitation.id);
    window.scrollTo(0, 0);
  }

  if (publishedId) {
    return <Published id={publishedId} />;
  }

  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-375 flex-col bg-surface-default">
      <NavBar title="초대장 만들기" />

      <main className="flex flex-1 flex-col gap-section-lg px-page-horizontal pb-cover-inset">
        <div className="flex flex-col gap-stack-lg">
          <Textarea
            label="제목"
            rows={2}
            required
            placeholder={"예) 허들링 클럽 2번째\n오프라인 밋업"}
            helper="엔터로 줄을 나눌 수 있어요 · 최대 2줄"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value.split("\n").slice(0, TITLE_MAX_LINES).join("\n"))
            }
          />
          <Input
            label="일시"
            required
            placeholder="예) 2026년 11월 14일 (토) 09:00"
            value={eventAt}
            onChange={(e) => setEventAt(e.target.value)}
          />
          <Input
            label="장소"
            required
            placeholder="예) 세종 남극 기지"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
          />
          <Textarea
            label="본문"
            rows={4}
            required
            placeholder="게스트에게 전할 초대 글을 적어주세요"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>

        <section className="flex flex-col gap-inline-md">
          <Label as="span">미리보기</Label>
          {/* 미리보기는 고정 높이의 스크롤 영역 */}
          <div className="h-460 overflow-y-auto rounded-control border border-border-subtle bg-surface-default">
            <InvitationCover title={title} eventAt={eventAt} place={place} />
            <div className="flex flex-col items-center gap-stack-md px-page-horizontal py-cover-inset">
              <Image type="flag" alt="" />
              <p className="w-full whitespace-pre-wrap break-words text-center text-body-compact text-text-primary">
                {body}
              </p>
            </div>
            <div className="px-page-horizontal pt-stack-lg pb-section-lg">
              <div className="flex flex-col gap-control-compact rounded-card bg-surface-subtle p-page-horizontal">
                <InfoRow label="일시" value={eventAt} />
                <InfoRow label="장소" value={place} />
              </div>
            </div>
          </div>
          <p className="text-caption-md text-text-tertiary">입력하는 내용이 바로 미리보기에 반영돼요.</p>
        </section>
      </main>

      {/* 화면 하단에 고정되는 발행 버튼 */}
      <div className="sticky bottom-0 bg-surface-default p-page-horizontal">
        <Button size="lg" className="w-full" disabled={!canPublish} onClick={publish}>
          발행하기
        </Button>
      </div>
    </div>
  );
}

// 발행 완료 — 초대장 링크와 응답 현황 링크를 보여주고 복사할 수 있게 한다
function Published({ id }: { id: string }) {
  const router = useRouter();
  const invitationUrl = `${window.location.origin}/i/${id}`;

  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-375 flex-col gap-page-horizontal bg-surface-default">
      <NavBar title="발행 완료" />

      <main className="flex flex-col gap-section-lg px-page-horizontal pb-cover-inset">
        <div className="flex flex-col items-center gap-stack-sm py-stack-lg text-center">
          <SuccessIcon />
          <p className="text-title-lg text-text-strong">초대장이 발행됐어요!</p>
          <p className="text-body-md text-text-secondary">아래 두 링크를 복사해 두세요.</p>
        </div>
        <CopyLinkField
          title="초대장 링크"
          url={invitationUrl}
          description="게스트에게 공유하는 링크예요."
        />
        <CopyLinkField
          title="응답 현황 링크"
          url={`${invitationUrl}/responses`}
          description="호스트용이에요. 이 링크를 아는 사람은 응답 목록을 볼 수 있어요."
        />
        <Button size="lg" className="w-full" onClick={() => router.push(`/i/${id}`)}>
          내 초대장 보기
        </Button>
      </main>
    </div>
  );
}
