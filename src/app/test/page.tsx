import type { ReactNode } from "react";
import AttendanceBadge from "@/components/AttendanceBadge";
import Button from "@/components/Button";
import CopyLinkField from "@/components/CopyLinkField";
import EmptyState from "@/components/EmptyState";
import IconCheck from "@/components/IconCheck";
import IconMinus from "@/components/IconMinus";
import IconNone from "@/components/IconNone";
import IconPlus from "@/components/IconPlus";
import Image from "@/components/Image";
import InfoRow from "@/components/InfoRow";
import Input from "@/components/Input";
import InputField from "@/components/InputField";
import InvitationCover from "@/components/InvitationCover";
import Label from "@/components/Label";
import NavBar from "@/components/NavBar";
import Radio from "@/components/Radio";
import RadioOption from "@/components/RadioOption";
import ResponseRow from "@/components/ResponseRow";
import RSVPCard from "@/components/RSVPCard";
import SectionHeader from "@/components/SectionHeader";
import StatCard from "@/components/StatCard";
import StepButton from "@/components/StepButton";
import Stepper from "@/components/Stepper";
import SuccessIcon from "@/components/SuccessIcon";
import Textarea from "@/components/Textarea";
import TextareaField from "@/components/TextareaField";

// 실습용 테스트 화면 — 컴포넌트를 종류별로 띄워 확인한다
const sizes = ["sm", "md", "lg"] as const;

function Demo({ name, children }: { name: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-stack-sm">
      <h2 className="text-label-md text-text-secondary">{name}</h2>
      {children}
    </section>
  );
}

export default function TestPage() {
  return (
    <main className="flex flex-col gap-section bg-background-subtle px-page-horizontal py-section">
      <h1 className="text-heading-lg text-text-primary">컴포넌트 테스트</h1>

      <Demo name="icon/check · icon/plus · icon/minus · icon/none(빈 자리)">
        <div className="flex items-center gap-stack-md">
          <IconCheck />
          <IconPlus />
          <IconMinus />
          <IconNone className="bg-surface-subtle" />
        </div>
      </Demo>

      <Demo name="Image (character · flag)">
        <div className="flex items-start gap-stack-md">
          <Image type="character" alt="" />
          <Image type="flag" alt="" />
        </div>
      </Demo>

      <Demo name="Label">
        <div className="flex gap-stack-md">
          <Label required>Label</Label>
          <Label>Label</Label>
        </div>
      </Demo>

      <Demo name="Radio (default · selected · disabled)">
        <div className="flex">
          <Radio name="demo-radio" />
          <Radio name="demo-radio" defaultChecked />
          <Radio disabled />
        </div>
      </Demo>

      <Demo name="AttendanceBadge (yes · no)">
        <div className="flex gap-stack-md">
          <AttendanceBadge status="yes" />
          <AttendanceBadge status="no" />
        </div>
      </Demo>

      <Demo name="SuccessIcon">
        <SuccessIcon />
      </Demo>

      <Demo name="Button (왼쪽: 기본 · 오른쪽: disabled)">
        {sizes.map((size) => (
          <div key={size} className="flex flex-wrap items-center gap-stack-md">
            <Button size={size}>Button</Button>
            <Button size={size} disabled>
              Button
            </Button>
          </div>
        ))}
      </Demo>

      <Demo name="StepButton (default · disabled)">
        <div className="flex gap-stack-md">
          <StepButton icon="minus" aria-label="줄이기" />
          <StepButton icon="minus" aria-label="줄이기" disabled />
          <StepButton icon="plus" aria-label="늘리기" />
        </div>
      </Demo>

      <Demo name="InputField (빈 칸 · 값 있음) — 눌러서 focus 확인">
        <InputField placeholder="placeholder" />
        <InputField defaultValue="입력한 값" />
      </Demo>

      <Demo name="TextareaField">
        <TextareaField placeholder="게스트에게 전할 초대 글을 적어주세요" />
      </Demo>

      <Demo name="InfoRow (inline · spread)">
        <InfoRow label="일시" value="2026년 11월 14일 (토) 09:00" />
        <InfoRow type="spread" label="일시" value="2026년 11월 14일 (토) 09:00" />
      </Demo>

      <Demo name="StatCard (highlight=false · true)">
        <div className="flex gap-stack-sm">
          <StatCard label="참석" value="2명" className="flex-1" />
          <StatCard label="불참" value="1명" className="flex-1" />
          <StatCard label="참석 인원 합계" value="3명" highlight className="flex-1" />
        </div>
      </Demo>

      <Demo name="EmptyState">
        <EmptyState
          title="아직 응답이 없어요"
          description="초대장 링크를 공유하면 응답이 여기에 쌓여요."
        />
      </Demo>

      <Demo name="SectionHeader">
        <SectionHeader subtitle="Subtitle" title="title" description="Description" />
      </Demo>

      <Demo name="NavBar">
        <NavBar title="Label" className="bg-surface-default" />
      </Demo>

      <Demo name="Input">
        <Input label="Label" placeholder="placeholder" required helper="안내 문구" />
      </Demo>

      <Demo name="Textarea (rows=4 · rows=2)">
        <Textarea
          label="Label"
          placeholder="게스트에게 전할 초대 글을 적어주세요"
          required
          helper="엔터로 줄을 나눌 수 있어요"
        />
        <Textarea label="Label" placeholder="게스트에게 전할 초대 글을 적어주세요" rows={2} required />
      </Demo>

      <Demo name="RadioOption">
        <div className="flex">
          <RadioOption label="참석" name="demo-option" defaultChecked className="flex-1" />
          <RadioOption label="불참" name="demo-option" className="flex-1" />
        </div>
      </Demo>

      <Demo name="Stepper — 0명이면 − 비활성">
        <Stepper defaultValue={1} />
      </Demo>

      <Demo name="ResponseRow">
        <ResponseRow name="김허들" meta="동반 1명" status="yes" />
        <ResponseRow name="이허들" status="no" />
      </Demo>

      <Demo name="CopyLinkField">
        <CopyLinkField
          title="초대장 링크"
          url="http://localhost:3000/i/k3f9x2a7"
          description="게스트에게 공유하는 링크예요."
        />
      </Demo>

      <Demo name="RSVPCard (form · done)">
        <RSVPCard />
        <RSVPCard state="done" name="김허들" attending companions={1} />
      </Demo>

      <Demo name="InvitationCover">
        <InvitationCover
          subtitle="Huddling Club 2nd Meetup"
          title={"허들링 클럽 2번째\n오프라인 밋업"}
          eventAt="2026년 11월 14일 (토) 09:00"
          place="세종 남극 기지"
        />
      </Demo>
    </main>
  );
}
