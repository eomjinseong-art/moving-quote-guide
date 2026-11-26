export const SITE_NAME = "이사 견적 노트";
export const SITE_TAGLINE = "이사·입주청소 견적, 요청 전에 알아둘 것";
export const SITE_SUB =
  "이사와 입주청소 견적을 받기 전에 맞춰 둘 조건, 견적을 같은 기준으로 비교하는 요령, 요청서에 적으면 좋은 내용을 한곳에 정리했습니다.";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://moving-quote-guide.vercel.app";

/** Abacus visitor counter. One hit per browser per local day; test traffic is excluded. */
export const ABACUS_NAMESPACE = "moving-quote-guide";
export const ABACUS_KEY = "visits";
export const ABACUS_STORAGE_KEY = "moving-quote-guide:visits:day";
export const PROD_HOSTS = ["moving-quote-guide.vercel.app"];

export const AD_DISCLOSURE =
  "이 페이지에는 제휴마케팅 링크가 포함될 수 있으며, 서비스 이용 시 운영자가 수수료를 받을 수 있습니다.";

export const NAV = [
  { href: "/", label: "홈" },
  { href: "/checklist", label: "체크리스트" },
  { href: "/compare", label: "견적 비교" },
  { href: "/request", label: "요청서" },
  { href: "/cleaning", label: "입주청소" },
] as const;

function utm(base: string, medium = "footer") {
  const url = new URL("/", base);
  url.searchParams.set("utm_source", "moving-quote-guide");
  url.searchParams.set("utm_medium", medium);
  url.searchParams.set("utm_campaign", "site-network");
  return url.toString();
}

export const SISTER_SITES = [
  { label: "시니어 정리·돌봄 노트", url: "https://senior-care-note.vercel.app" },
  { label: "나두 허브", url: "https://tinalinkeom.vercel.app" },
] as const;

export function sisterUrl(url: string, medium = "footer") {
  return utm(url, medium);
}
