import { Breadcrumb, PageTitle } from "@/components/ui";
import { LINKPRICE_DISCLOSURE } from "@/lib/config";
import { pageMetadata } from "@/lib/seo";
import { AD_DISCLOSURE, SITE_NAME } from "@/lib/site";

export const metadata = pageMetadata({
  title: "사이트 안내와 광고 고지",
  description: `${SITE_NAME}의 운영 방식, 제휴마케팅 광고 고지, 정보의 한계를 안내합니다.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Breadcrumb items={[{ href: "/", label: "홈" }, { label: "사이트 안내" }]} />
      <PageTitle kicker="안내" title="사이트 안내와 광고 고지" />
      <div className="space-y-4 text-[15px] leading-7 text-slate-700">
        <p>
          {SITE_NAME}는 운영자가 이사·입주청소 견적을 준비하는 데 필요한 정보를 정리한 사이트입니다. 이사업체·청소업체·중개 플랫폼이 아니며, 견적 요청서를 대신 받거나 계약을 주선하지 않습니다.
        </p>
        <h2 className="pt-2 text-lg font-bold text-slate-900">광고 고지</h2>
        <p>
          {AD_DISCLOSURE} {LINKPRICE_DISCLOSURE} 「광고」 표시가 붙은 버튼은 제휴 서비스로 연결됩니다. 링크가 아직 없는 동안에는 해당 버튼을 보여 주지 않습니다.
        </p>
        <h2 className="pt-2 text-lg font-bold text-slate-900">정보의 한계</h2>
        <p>
          이 사이트의 체크리스트와 비교 요령은 일반적인 안내입니다. 실제 비용, 일정, 작업 범위, 보험·보상은 업체와 현장 조건에 따라 달라집니다. 최저가, 일정 보장, 특정 업체 우열을 단정하거나 약속하지 않습니다.
        </p>
      </div>
    </>
  );
}
