"use client";

import Button from "@/components/Button";

// 게스트에게 보낼 초대장 링크(/i/[id])를 복사한다
export default function CopyInvitationLinkButton({ id }: { id: string }) {
  return (
    <Button
      size="lg"
      className="w-full"
      onClick={() => navigator.clipboard.writeText(`${window.location.origin}/i/${id}`)}
    >
      초대장 링크 복사하기
    </Button>
  );
}
