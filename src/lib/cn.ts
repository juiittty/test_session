// 조건부 클래스 이름을 공백으로 이어 붙인다. (빈 값은 건너뜀)
export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
