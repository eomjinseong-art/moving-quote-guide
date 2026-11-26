import Link from "next/link";
import { Cta } from "@/components/Cta";
import { Breadcrumb, PageTitle, Table } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "이사 견적 비교 요령",
  description: "이사 견적을 금액만이 아니라 포함 항목, 보험, 사다리차, 보관, 인원, 취소 조건까지 같은 기준으로 비교하는 방법을 정리했습니다.",
  path: "/compare",
  keywords: ["이사 견적 비교", "포장이사 견적 보는 법", "이사 추가 비용"],
});

export default function ComparePage() {
  return (
    <>
      <Breadcrumb items={[{ href: "/", label: "홈" }, { label: "견적 비교" }]} />
      <PageTitle
        kicker="비교"
        title="이사 견적, 같은 기준으로 보는 요령"
        sub="견적서 숫자만 나열하면 싼 쪽을 고르기 어렵습니다. 포함되지 않은 항목이 나중에 추가되는 경우가 많기 때문입니다. 이 페이지는 특정 업체의 우열이나 최저가를 단정하지 않습니다."
      />

      <section className="space-y-3 text-[15px] leading-7 text-slate-700">
        <h2 className="text-lg font-bold text-slate-900">먼저 조건을 같게 맞추세요</h2>
        <p>
          날짜, 출발·도착, 포장 여부, 짐 목록, 엘리베이터·사다리차, 보관 기간을 모두 같게 적은 뒤에 견적을 나란히 놓으세요. 한곳만 포장을 포함하고 다른 곳은 운송만 포함한 채로 금액을 비교하면 의미가 줄어듭니다. 조건 목록은 <Link href="/checklist" className="text-teal-700 underline">체크리스트</Link>를 참고하세요.
        </p>
      </section>

      <section className="mt-10 space-y-3 text-[15px] leading-7 text-slate-700">
        <h2 className="text-lg font-bold text-slate-900">견적서에서 맞춰 볼 항목</h2>
        <Table
          head={["항목", "확인해 볼 점"]}
          rows={[
            ["작업 범위", "운송만인지, 포장·운반·배치·간단 설치까지인지"],
            ["인원과 차량", "작업 인원, 차량 톤수, 예상 소요 시간"],
            ["사다리차", "포함인지, 별도인지, 단지 허가 대행 여부"],
            ["포장재", "박스·보자기·에어캡 비용이 포함인지"],
            ["보험", "운송 중 파손·분실에 대한 보상 범위와 면책, 증빙 방법"],
            ["보관", "보관이 필요하면 일수·장소·입출고 비용"],
            ["추가 비용", "주차, 계단 운반, 야간·주말, 특수 물건, 폐기물"],
            ["결제와 취소", "계약금, 잔금 시점, 날짜 변경·취소 시 비용"],
          ]}
        />
      </section>

      <section className="mt-10 space-y-3 text-[15px] leading-7 text-slate-700">
        <h2 className="text-lg font-bold text-slate-900">금액 외에 같이 보면 좋은 것</h2>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>사업자등록과 연락 가능한 대표자·현장 담당자가 분명한지</li>
          <li>방문 견적인지, 사진·영상만으로 낸 견적인지(방문 없이 낸 금액은 당일 달라질 수 있습니다)</li>
          <li>견적 유효 기간과, 현장 상황이 다를 때 어떻게 재산정하는지</li>
          <li>작업 전 집기 상태 확인(사진 기록)을 하는지</li>
        </ul>
        <p>
          유난히 낮거나 포함 항목이 비어 있는 견적은 추가 비용이 붙는지 다시 물어보는 것이 안전합니다. 반대로 금액이 높다고 해서 항상 범위가 넓은 것도 아닙니다. 질문 목록을 <Link href="/request" className="text-teal-700 underline">요청서</Link>에 미리 넣어 두면 답변을 같은 형식으로 받을 수 있습니다.
        </p>
      </section>

      <Cta context="같은 조건으로 여러 곳의 견적을 받아 비교해 보세요" />
    </>
  );
}
