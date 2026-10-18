"use client";

import { useState } from "react";
import RSVPCard from "@/components/RSVPCard";

type Submitted = {
  name: string;
  attending: boolean;
  companions: number;
};

// 참석 신청 카드. 제출하면 같은 자리에서 완료 상태로 바뀐다.
export default function RsvpSection() {
  const [submitted, setSubmitted] = useState<Submitted | null>(null);

  // TODO: Supabase를 붙이면 Server Action으로 저장하고, 서버에서 값을 다시 검사한다.
  function submit(formData: FormData) {
    const name = String(formData.get("name") ?? "").trim();
    if (!name) return;
    const attending = formData.get("attending") === "yes";
    const companions = attending ? Math.max(0, Number(formData.get("companions")) || 0) : 0;
    setSubmitted({ name, attending, companions });
  }

  return (
    <section className="bg-background-subtle px-page-horizontal pt-section-lg pb-section-xl">
      {submitted ? (
        <RSVPCard
          state="done"
          name={submitted.name}
          attending={submitted.attending}
          companions={submitted.companions}
        />
      ) : (
        <RSVPCard action={submit} />
      )}
    </section>
  );
}
