import { useId } from "react";
import Button from "@/components/Button";
import InfoRow from "@/components/InfoRow";
import Input from "@/components/Input";
import Label from "@/components/Label";
import RadioOption from "@/components/RadioOption";
import Stepper from "@/components/Stepper";
import SuccessIcon from "@/components/SuccessIcon";
import { cn } from "@/lib/cn";

type RSVPCardProps =
  | {
      state?: "form";
      // 제출할 때 실행할 함수 (Server Action 등)
      action?: (formData: FormData) => void | Promise<void>;
      className?: string;
    }
  | {
      state: "done";
      name: string;
      attending: boolean;
      companions: number;
      className?: string;
    };

// Figma: RSVPCard — 보기 화면(/i/[id])의 참석 신청 카드.
// 제출 전 state=form, 제출 후 같은 자리에서 state=done으로 바뀐다.
export default function RSVPCard(props: RSVPCardProps) {
  const attendingLabelId = useId();
  return (
    <div
      className={cn(
        "flex w-full flex-col gap-stack-lg rounded-card bg-surface-default px-page-horizontal py-stack-lg",
        props.className,
      )}
    >
      {props.state === "done" ? (
        <>
          <div className="flex w-full flex-col items-center gap-stack-sm py-section-lg text-center">
            <SuccessIcon />
            <p className="text-title-lg text-text-strong">참석 여부를 보냈어요</p>
            <p className="text-body-md text-text-secondary">호스트에게 응답이 전달됐어요.</p>
          </div>
          <div className="flex w-full flex-col gap-inline-md rounded-card bg-surface-subtle p-stack-md">
            <InfoRow type="spread" label="이름" value={props.name} />
            <InfoRow type="spread" label="참석 여부" value={props.attending ? "참석" : "불참"} />
            {props.attending && (
              <InfoRow type="spread" label="동반 인원" value={`${props.companions}명`} />
            )}
          </div>
        </>
      ) : (
        <form action={props.action} className="flex w-full flex-col gap-stack-lg">
          <div className="flex w-full flex-col items-center gap-inline-compact text-center">
            <p className="text-heading-lg text-text-strong">참석 여부 알려주기</p>
            <p className="text-body-md text-text-secondary">이름과 참석 여부를 남겨주세요.</p>
          </div>

          <div className="flex w-full flex-col gap-stack-lg">
            <Input label="이름" name="name" placeholder="이름을 입력해주세요" required />

            <div className="flex w-full flex-col gap-inline-md">
              <Label as="span" required>
                <span id={attendingLabelId}>참석 여부</span>
              </Label>
              <div role="radiogroup" aria-labelledby={attendingLabelId} className="flex w-full items-center">
                <RadioOption label="참석" name="attending" value="yes" defaultChecked className="flex-1" />
                <RadioOption label="불참" name="attending" value="no" className="flex-1" />
              </div>
            </div>

            <div className="flex w-full flex-col gap-inline-md">
              <Label as="span" required>
                동반 인원
              </Label>
              <Stepper name="companions" />
              <p className="text-caption-md text-text-tertiary">본인을 제외하고 함께 오는 인원이에요.</p>
            </div>
          </div>

          <Button type="submit" size="lg" className="w-full">
            참석 여부 보내기
          </Button>
        </form>
      )}
    </div>
  );
}
