// [설명] 이 파일은 Next.js 프로젝트 전체에 적용되는 설정 파일이에요.
// [설명] 개발 서버(npm run dev)나 빌드(npm run build)를 시작할 때 Next.js가 가장 먼저 읽어요.
// [설명] 여기서는 캐시(한 번 만든 결과를 저장해 두고 다시 쓰는 것), 미리 불러오기, Tailwind CSS 처리 방법을 정해요.
// [설명] 이 파일을 고친 뒤에는 개발 서버를 껐다 켜야 바뀐 설정이 적용돼요.
// [설명] NextConfig는 설정에 어떤 항목을 쓸 수 있는지 알려주는 TypeScript 타입(값의 모양을 정한 틀)이에요.
// [설명] 덕분에 설정 이름을 틀리게 쓰면 편집기가 바로 빨간 줄로 알려줘요.
import type { NextConfig } from "next";

// [설명] 실제 설정 내용을 담는 객체(이름: 값 짝을 묶어 놓은 것)예요.
const nextConfig: NextConfig = {
  /* config options here */
  // [설명] Cache Components 기능을 켜요.
  // [설명] 데이터는 기본적으로 요청할 때마다 새로 가져오고, 저장해 두고 싶은 부분만 "use cache"라고 표시해서 캐시해요.
  // [설명] 또 페이지에서 바뀌지 않는 부분은 미리 만들어 두었다가 바로 보여주고, 바뀌는 부분은 준비되는 대로 이어서 채워 넣어요.
  cacheComponents: true,
  // [설명] Partial Prefetching(부분 미리 불러오기)을 켜요. cacheComponents가 켜져 있어야 동작해요.
  // [설명] 화면에 링크가 보이면, 그 페이지의 바뀌지 않는 뼈대 부분을 미리 받아 둬서 클릭했을 때 빠르게 열려요.
  // [설명] Next.js 공식 문서는 cacheComponents를 켤 때 이 값도 꼭 같이 적으라고 해요. 안 적으면 경고가 나와요.
  partialPrefetching: true,
  // [설명] Turbopack은 우리가 쓴 코드를 브라우저가 읽을 수 있는 파일로 묶고 변환해 주는 도구예요.
  turbopack: {
    // [설명] rules는 "어떤 파일을 어떤 도구로 한 번 더 처리할지" 정하는 규칙 목록이에요.
    rules: {
      // [설명] 이름이 .css로 끝나는 모든 파일(예: src/app/globals.css)에 적용되는 규칙이에요.
      "*.css": {
        // [설명] CSS 파일을 Tailwind CSS 전용 처리 도구(로더)에 먼저 통과시켜요.
        // [설명] 이 도구가 코드에 쓴 Tailwind 클래스(예: flex, h-full)를 찾아서 실제 CSS 스타일로 만들어줘요.
        loaders: ["@tailwindcss/turbopack"],
        // [설명] 처리한 결과물도 계속 CSS 파일로 취급하라는 뜻이에요.
        as: "*.css",
      },
    },
  },
};

// [설명] 위에서 만든 설정을 내보내요. Next.js가 이 값을 가져가서 사용해요.
export default nextConfig;
