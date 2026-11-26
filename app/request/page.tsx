import Link from "next/link";
import { Cta } from "@/components/Cta";
import { Breadcrumb, PageTitle } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "이사 견적 요청서 쓰는 법",
  description: "이사 견적 요청서에 일정, 주소, 층수, 짐 목록, 포장 범위, 특수 물건, 주차와 사다리차 조건을 구체적으로 적는 방법을 정리했습니다.",
  path: "/request",
  keywords: ["이사 견적 요청서", "이사 문의 양식", "포장이사 요청"],
});

const BLOCKS = [
  {
    h: "기본 정보",
    p: "희망 날짜(예비 날짜 포함), 출발지와 도착지 주소, 각 집의 층수, 엘리베이터 유무와 크기, 주차 가능 여부를 먼저 적습니다. '서울에서 경기도로'처럼만 적으면 거리와 건물 조건을 반영한 견적을 받기 어렵습니다.",
  },
  {
    h: "짐 목록은 구체적으로",
    p: "방 수와 대략적인 양만 적기보다, 대형 가전·가구를 품목별로 적는 편이 낫습니다. 예를 들어 '냉장고(양문, 용량), 세탁기, 퀸 침대, 3인용 소파, 옷장 2개'처럼 적으면 차량과 인원을 가늠하기 쉽습니다. 버릴 짐과 가져갈 짐도 구분해 주세요.",
  },
  {
    h: "특수 물건과 취급 요청",
    p: "피아노, 금고, 수족관, 운동 기구, 거울·액자, 잘 깨지는 식기, 화분은 따로 적습니다. 분해·조립, 물 빼기, 벽 고정 해제가 필요한지도 밝혀 두면 당일 추가 비용을 줄일 수 있습니다.",
  },
  {
    h: "원하는 작업 범위",
    p: "포장까지 맡길지, 상자는 직접 싸고 운반만 맡길지, 도착지에서 배치와 가전 설치까지 원하는지를 문장으로 적습니다. '포장이사로 부탁합니다'만 적으면 포장재 비용이나 설치 범위가 빠질 수 있습니다.",
  },
  {
    h: "건물 접근과 제약",
    p: "트럭 정차, 사다리차 필요 여부, 단지 엘리베이터 예약, 작업 가능 시간, 이사 당일 입주 절차를 적습니다. 신축 단지는 시간대가 정해진 경우가 많습니다.",
  },
  {
    h: "견적서에 적어 달라고 요청할 것",
    p: "포함 항목, 인원과 차량, 사다리차·포장재·보험·보관의 별도 여부, 추가 비용이 생기는 조건, 계약금과 취소·날짜 변경 기준, 견적 유효 기간을 답에 포함해 달라고 요청하세요. 비교 항목은 견적 비교 요령에 정리해 두었습니다.",
  },
];

export default function RequestPage() {
  return (
    <>
      <Breadcrumb items={[{ href: "/", label: "홈" }, { label: "요청서" }]} />
      <PageTitle
        kicker="작성"
        title="이사 견적 요청서 쓰는 법"
        sub="여러 곳에 같은 내용으로 보내야, 돌아온 금액의 차이가 조건 차이 때문인지 알 수 있습니다. 짧고 구체적으로 적는 편이 유리합니다."
      />
      <div className="space-y-8">
        {BLOCKS.map((b) => (
          <section key={b.h} className="text-[15px] leading-7 text-slate-700">
            <h2 className="text-lg font-bold text-slate-900">{b.h}</h2>
            <p className="mt-3">{b.p}</p>
          </section>
        ))}
      </div>
      <p className="mt-8 text-[15px] leading-7 text-slate-700">
        요청 전에 <Link href="/checklist" className="text-teal-700 underline">체크리스트</Link>로 빠뜨린 항목이 없는지만 한 번 더 보시고, 받은 답은 <Link href="/compare" className="text-teal-700 underline">같은 기준으로 비교</Link>해 보세요.
      </p>
      <Cta context="요청서 내용을 정리했다면, 견적을 요청해 보세요" />
    </>
  );
}
