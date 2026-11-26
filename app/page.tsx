import Link from "next/link";
import { Cta } from "@/components/Cta";
import { JsonLd } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";
import { SITE_NAME, SITE_SUB, SITE_URL } from "@/lib/site";

export const metadata = pageMetadata({
  title: "이사·입주청소 견적 받는 법",
  description: SITE_SUB,
  path: "/",
  keywords: ["이사 견적", "포장이사 견적", "입주청소 견적", "이사 체크리스트"],
});

const STEPS = [
  { href: "/checklist", t: "1. 조건 체크리스트", d: "날짜, 출발·도착, 층수, 엘리베이터, 짐의 양, 포장·주차까지 먼저 맞춰 두기" },
  { href: "/request", t: "2. 요청서 쓰기", d: "같은 내용을 여러 곳에 전달해야 견적 차이가 조건 차이 때문인지 알 수 있습니다" },
  { href: "/compare", t: "3. 견적 비교 요령", d: "금액만이 아니라 포함 항목, 보험, 사다리차, 보관, 취소 조건을 같은 기준으로 보기" },
  { href: "/cleaning", t: "4. 입주청소 견적", d: "이사 전후 시점, 평수, 발코니·창틀·주방 후드처럼 범위부터 정하기" },
];

export default function Home() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "WebSite", name: SITE_NAME, url: SITE_URL, inLanguage: "ko-KR" }} />
      <section className="rounded-3xl bg-gradient-to-br from-teal-700 to-teal-900 px-6 py-10 text-white sm:px-10">
        <p className="text-xs font-semibold tracking-wider text-teal-100">이사 · 입주청소 견적 가이드</p>
        <h1 className="mt-3 text-2xl font-bold leading-snug sm:text-4xl">
          이사·입주청소 견적,
          <br />요청 전에 이 순서로 정리하세요
        </h1>
        <p className="mt-4 max-w-2xl text-[15px] leading-7 text-teal-100">{SITE_SUB}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/checklist" className="rounded-xl bg-white px-5 py-3 text-sm font-bold text-teal-800">체크리스트 보기</Link>
          <Link href="/request" className="rounded-xl border border-white/60 px-5 py-3 text-sm font-bold text-white">요청서 쓰는 법</Link>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold">이 순서로 보시면 됩니다</h2>
        <ol className="mt-4 grid gap-3 sm:grid-cols-2">
          {STEPS.map((s) => (
            <li key={s.href}>
              <Link href={s.href} className="block h-full rounded-2xl border border-slate-200 p-4 hover:border-teal-600">
                <span className="font-semibold text-slate-900">{s.t}</span>
                <span className="mt-1 block text-sm text-slate-600">{s.d}</span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-12 space-y-3 text-[15px] leading-7 text-slate-700">
        <h2 className="text-xl font-bold text-slate-900">왜 조건을 먼저 맞추나요?</h2>
        <p>
          이사 견적은 같은 집을 옮겨도 날짜(주말·월말), 층수와 엘리베이터, 주차, 포장 여부, 짐의 양, 사다리차나 보관이 필요한지에 따라 금액이 달라집니다. 조건을 적지 않고 견적만 여러 곳 받으면, 싼 견적과 비싼 견적의 차이를 가리기 어렵습니다.
        </p>
        <p>
          이 사이트는 이사업체나 청소업체가 아니며 견적을 대신 받거나 중개하지 않습니다. 실제 비용·일정·작업 범위는 업체와 현장 조건에 따라 달라지며, 최저가·일정 보장을 약속하지 않습니다.
        </p>
      </section>

      <Cta context="조건을 정리했다면, 여러 곳에서 견적을 받아 보세요" />
    </>
  );
}
