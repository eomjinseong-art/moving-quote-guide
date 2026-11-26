import Link from "next/link";
import { SISTER_SITES, SITE_NAME, sisterUrl } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-5xl px-4 pt-8">
        <h2 className="text-xs font-semibold tracking-wider text-slate-500">함께 보면 좋은 사이트</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {SISTER_SITES.map((site) => (
            <a key={site.url} href={sisterUrl(site.url)} className="rounded-full border border-slate-300 bg-white px-3 py-1 text-xs text-slate-600 hover:border-teal-600 hover:text-teal-700">
              {site.label}
            </a>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-5xl space-y-3 px-4 py-8 text-xs leading-6 text-slate-500">
        <p className="font-semibold text-slate-700">{SITE_NAME}</p>
        <p>이 사이트는 운영자가 만든 정보 사이트로, 이사업체나 청소업체가 아니며 견적을 대신 받거나 중개하지 않습니다. 실제 비용과 일정은 업체·날짜·물량·건물 조건에 따라 달라집니다.</p>
        <p>제휴 링크가 있는 경우, 해당 서비스를 이용하면 운영자가 수수료를 받을 수 있습니다.</p>
        <nav className="flex flex-wrap gap-x-4 gap-y-1">
          <Link href="/about" className="hover:text-teal-700">사이트 안내·광고 고지</Link>
          <Link href="/checklist" className="hover:text-teal-700">체크리스트</Link>
          <Link href="/compare" className="hover:text-teal-700">견적 비교</Link>
          <Link href="/request" className="hover:text-teal-700">요청서</Link>
          <Link href="/cleaning" className="hover:text-teal-700">입주청소</Link>
        </nav>
      </div>
    </footer>
  );
}
