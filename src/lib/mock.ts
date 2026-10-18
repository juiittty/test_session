// 화면 확인용 가짜 데이터. Supabase를 붙이면 실제 데이터로 바꾼다.
// 필드 이름은 CLAUDE.md의 데이터 초안(invitations, responses)을 따른다.

export type Invitation = {
  id: string;
  title: string;
  event_at: string; // 일시 (ISO 8601, 한국 시간)
  place: string; // 주소를 글자로만 표시
  body: string;
  created_at: string;
};

export type InvitationResponse = {
  id: string;
  invitation_id: string;
  name: string;
  attending: boolean; // 참석 여부
  companions: number; // 본인을 제외한 동반 인원. 불참이면 0
  created_at: string;
};

export const mockInvitation: Invitation = {
  id: "3f8a2c1e-9b4d-4e7a-a5c6-1d2e3f4a5b6c",
  title: "허들링 클럽 2번째\n오프라인 밋업",
  event_at: "2026-11-14T09:00:00+09:00",
  place: "세종 남극 기지",
  body: "추운 겨울, 다 같이 모여 온기를 나눠요.\n편한 옷차림으로 와주세요!",
  created_at: "2026-10-18T10:00:00+09:00",
};

export const mockResponses: InvitationResponse[] = [
  {
    id: "a1b2c3d4-0001-4a1b-8c2d-3e4f5a6b7c8d",
    invitation_id: mockInvitation.id,
    name: "김허들",
    attending: true,
    companions: 1,
    created_at: "2026-10-18T12:30:00+09:00",
  },
  {
    id: "a1b2c3d4-0002-4a1b-8c2d-3e4f5a6b7c8d",
    invitation_id: mockInvitation.id,
    name: "이펭귄",
    attending: true,
    companions: 0,
    created_at: "2026-10-18T14:10:00+09:00",
  },
  {
    id: "a1b2c3d4-0003-4a1b-8c2d-3e4f5a6b7c8d",
    invitation_id: mockInvitation.id,
    name: "박남극",
    attending: false,
    companions: 0,
    created_at: "2026-10-18T18:45:00+09:00",
  },
];
