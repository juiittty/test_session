// ISO 일시를 "2026년 11월 14일 (토) 09:00" 형태(한국 시간)로 바꾼다
export function formatEventAt(iso: string) {
  const parts = new Intl.DateTimeFormat("ko-KR", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date(iso));

  const get = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? "";

  return `${get("year")}년 ${get("month")}월 ${get("day")}일 (${get("weekday")}) ${get("hour")}:${get("minute")}`;
}

// ISO 일시를 "10월 12일 14:03" 형태(한국 시간)로 바꾼다
export function formatRespondedAt(iso: string) {
  const parts = new Intl.DateTimeFormat("ko-KR", {
    timeZone: "Asia/Seoul",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date(iso));

  const get = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? "";

  return `${get("month")}월 ${get("day")}일 ${get("hour")}:${get("minute")}`;
}
