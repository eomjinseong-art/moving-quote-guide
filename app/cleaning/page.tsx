import Link from "next/link";
import { Cta } from "@/components/Cta";
import { Breadcrumb, PageTitle, Table } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "입주청소 견적 받기 전에 확인할 것",
  description: "입주청소 견적을 받기 전에 작업 시점, 평수, 방·화장실 수, 발코니·창틀·주방 후드 같은 범위를 정해 두는 방법을 정리했습니다.",
  path: "/cleaning",
  keywords: ["입주청소 견적", "이사 청소 체크리스트", "입주 청소 범위"],
});

export default function CleaningPage() {
  return (
    <>
      <Breadcrumb items={[{ href: "/", label: "홈" }, { label: "입주청소" }]} />
      <PageTitle
        kicker="입주청소"
        title="입주청소 견적, 범위를 먼저 정하세요"
        sub="입주청소는 집 크기만이 아니라 작업 시점과 포함 범위에 따라 견적이 달라집니다. 이 페이지는 특정 업체의 효과나 가격을 보장하지 않습니다."
      />

      <section className="space-y-3 text-[15px] leading-7 text-slate-700">
        <h2 className="text-lg font-bold text-slate-900">시점부터 고르기</h2>
        <p>
          빈집에서 하는 입주 전 청소와, 짐을 들이고 난 뒤의 청소는 동선과 작업 시간이 다릅니다. 신축은 공사 분진·스티커·테이프 자국, 기존 주택은 묵은 때와 주방·화장실 상태가 견적에 영향을 줄 수 있습니다. 이사 날짜와 청소 날짜가 겹치면 작업이 미뤄질 수 있으니 일정 여유를 확인해 보세요.
        </p>
      </section>

      <section className="mt-10 space-y-3 text-[15px] leading-7 text-slate-700">
        <h2 className="text-lg font-bold text-slate-900">견적에 적어 둘 기본 정보</h2>
        <Table
          head={["항목", "적어 두면 좋은 내용"]}
          rows={[
            ["집 정보", "공급·전용 면적, 방 수, 화장실 수, 층수, 엘리베이터"],
            ["주택 유형", "신축·기존 주택, 아파트·빌라·오피스텔"],
            ["희망 날짜", "입주 전인지 후인지, 예비 날짜"],
            ["포함 범위", "바닥, 벽, 창틀·유리, 발코니, 주방(후드·싱크), 화장실, 조명·스위치"],
            ["제외·주의", "이미 시공된 새 필름, 손보면 안 되는 설비, 반려동물 여부"],
            ["부가 요청", "에어컨·세탁기 청소, 폐기물, 베란다 샷시 레일"],
          ]}
        />
      </section>

      <section className="mt-10 space-y-3 text-[15px] leading-7 text-slate-700">
        <h2 className="text-lg font-bold text-slate-900">비교할 때 볼 점</h2>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>작업 시간과 인원, 사용 자재(세제·장비)를 설명하는지</li>
          <li>창틀·후드·틈새처럼 손이 많이 가는 부위가 기본인지 추가인지</li>
          <li>재방문 조건(남은 오염을 다시 손보는지)과 파손 책임</li>
          <li>수도·전기가 안 들어온 빈집에서 작업 가능한지</li>
        </ul>
        <p>
          이사 견적과 청소 견적을 같은 날로 잡을 때는, 짐이 들어가는 순서와 청소가 끝나는 순서를 미리 조율하는 것이 좋습니다. 이사 쪽 조건은 <Link href="/checklist" className="text-teal-700 underline">이사 체크리스트</Link>를 함께 보세요.
        </p>
      </section>

      <Cta context="입주청소 범위를 정했다면, 견적을 요청해 보세요" />
    </>
  );
}
