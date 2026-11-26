import Link from "next/link";
import { Cta } from "@/components/Cta";
import { Breadcrumb, PageTitle } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "이사 견적 받기 전 체크리스트",
  description: "이사 견적을 요청하기 전에 날짜, 출발·도착 주소, 층수, 엘리베이터, 짐의 양, 포장, 주차, 특수 이삿짐을 미리 정리하는 체크리스트입니다.",
  path: "/checklist",
  keywords: ["이사 체크리스트", "포장이사 준비", "이사 견적 전 확인"],
});

const GROUPS = [
  {
    h: "일정과 장소",
    items: [
      "희망 이사 날짜와 예비 날짜(주말·공휴일·월말은 예약이 몰리는 경우가 많습니다)",
      "출발지와 도착지 주소, 동·호수, 주차 가능 여부",
      "각 집의 층수, 엘리베이터 유무와 크기, 계단만 있는 구간",
      "도착 시간이 제한되는 단지 규정, 엘리베이터 사용 예약이 필요한지",
    ],
  },
  {
    h: "짐의 양과 특수 물건",
    items: [
      "방 수, 대략적인 짐의 양(1톤·2.5톤·5톤처럼 차 크기 기준을 업체에 물어 맞춰 보기)",
      "대형 가전·가구(냉장고, 세탁기, 침대, 소파, 장식장) 목록",
      "피아노, 금고, 운동 기구, 수족관, 미술품처럼 별도 취급이 필요한 물건",
      "버릴 짐과 가져갈 짐을 미리 나누었는지, 폐기물이 있는지",
    ],
  },
  {
    h: "포장·작업 범위",
    items: [
      "포장이사인지, 운송만 맡기는지, 본인이 상자만 싸는지",
      "포장재(박스, 에어캡, 보자기)를 누가 준비하는지",
      "입주 전 보관이 필요한지, 며칠인지",
      "짐 배치, 가전 설치, 커튼·조명 같은 부가 작업이 필요한지",
    ],
  },
  {
    h: "건물과 차량 접근",
    items: [
      "트럭이 건물 앞에 정차할 수 있는지, 우회나 도보 운반 거리가 긴지",
      "사다리차가 필요한지, 단지에서 사다리차 사용을 허용하는지",
      "도착지가 신축·입주 단지라 시간대가 정해져 있는지",
    ],
  },
];

export default function ChecklistPage() {
  return (
    <>
      <Breadcrumb items={[{ href: "/", label: "홈" }, { label: "체크리스트" }]} />
      <PageTitle
        kicker="준비"
        title="이사 견적 받기 전 체크리스트"
        sub="아래 항목을 먼저 적어두면, 여러 곳에 같은 조건으로 요청할 수 있습니다. 빠뜨린 조건이 나중에 추가 비용으로 나오는 경우가 많습니다."
      />
      <div className="space-y-8">
        {GROUPS.map((g) => (
          <section key={g.h}>
            <h2 className="text-lg font-bold text-slate-900">{g.h}</h2>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[15px] leading-7 text-slate-700">
              {g.items.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <p className="mt-8 text-[15px] leading-7 text-slate-700">
        정리한 내용은 <Link href="/request" className="text-teal-700 underline">요청서 쓰는 법</Link>에 옮겨 적고, 받은 견적은 <Link href="/compare" className="text-teal-700 underline">비교 요령</Link>으로 같은 항목끼리 맞춰 보세요. 입주 후 청소가 필요하면 <Link href="/cleaning" className="text-teal-700 underline">입주청소 견적</Link>도 함께 준비하는 것이 좋습니다.
      </p>
      <Cta context="체크리스트를 채웠다면, 같은 조건으로 견적을 요청해 보세요" />
    </>
  );
}
