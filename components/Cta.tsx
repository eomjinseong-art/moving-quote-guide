import { LINKPRICE_DISCLOSURE, SOOMGO_LABEL, SOOMGO_URL } from "@/lib/config";

function isLive(url: string) {
  return url.startsWith("https://");
}

type Props = { context?: string };

/** 숨고 본문 CTA. URL이 비어 있으면 버튼을 렌더하지 않습니다. 별도 페이지로 숨기지 않고 관련 본문에 직접 둡니다. */
export function Cta({ context }: Props) {
  if (!isLive(SOOMGO_URL)) return null;
  return (
    <section className="mt-10 rounded-2xl border border-teal-200 bg-teal-50 p-5 sm:p-6" aria-label="이사·입주청소 견적 요청 안내">
      <p className="text-xs font-semibold tracking-wider text-teal-800">광고 · 제휴 링크</p>
      <h2 className="mt-1 text-base font-bold text-slate-900">
        {context ? context : "이사·입주청소 견적 요청하기"}
      </h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        같은 조건으로 여러 곳의 견적을 받아 보면 포함 항목과 일정을 비교하기 쉽습니다. 버튼을 누르면 숨고로 이동합니다.
      </p>
      <div className="mt-4">
        <a
          href={SOOMGO_URL}
          target="_blank"
          rel="sponsored noopener"
          className="inline-flex items-center rounded-xl bg-teal-700 px-5 py-3 text-sm font-bold text-white hover:bg-teal-800"
          data-cta="soomgo"
          data-attr="soomgo-quote"
        >
          <span className="mr-2 rounded border border-white/60 px-1.5 py-0.5 text-[11px] font-semibold">광고</span>
          {SOOMGO_LABEL} →
        </a>
      </div>
      <p className="mt-3 text-[11px] leading-5 text-slate-500">
        {LINKPRICE_DISCLOSURE} 이 사이트는 견적 요청서를 받거나 개인정보를 저장하지 않습니다.
      </p>
    </section>
  );
}
