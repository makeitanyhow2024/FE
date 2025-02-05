// Get Date
export interface participant {
  user_id: number;
  user_name: string;
}

export interface GetPartyListData {
  id: number;
  name: string; // 파티 제목
  description: string; // 맛집 설명
  date: string; // 이 날짜형식은 string
  maxPeople: number;
  dueDate: string; // string으로 보내야함
  partyStatus: string; // 파티관련해서 파티가 모집중/모집마감/모집취소 상태를 의미
  babCategory: string; // 카테고리 대표 이미지 (목록에서 왼쪽에 넣을 이미지)

  party_leader: number; // 파티 개설자(리더) 아이디
  // 파티 리더의 name도 받아야 함 디자인 화면에 리더 이름 나옴 => 가게이름임. 리더이름 필요없음. 가게이름 받기.
  // 파티 장소 데이터도 받아야 함
  babName: string; // 가게이름
  participants: number; // 현재 파티 신청한 인원수
}

export interface GetPartyDetailData extends GetPartyListData {
  // 본인이 이 파티에 참석버튼을 눌렀는지 여부도 받아야 함
  // 본인이 리더인지 여부도 받아야 함 또는 리더id와 본인id비교로 판단 => 그럼 본인id필요(my페이지 만드는 사람이 recoil로 본인id넣기)
  icon_id: number; // 위 GetPartyListData 타입에서 이것만 추가하면 됨 => 어디에 필요한 것인지?
}

// TODO: GET /api/parties
// 1. 파티 리더의 name도 받아야 함 디자인 화면에 리더 이름 나옴
// 2. 파티 목록에서 왼쪽에 넣을 이미지도 받아야 함
// 5. date 날짜 형식 모두 string 형식으로 통일
// 6.   participants: participant[]; // 파티원 정보 데이터는 목록화면에서는 필요 없어 보임, 파티원 인원수만 필요

// TODO: GET /api/parties/{partyID}
// 1. 본인이 이 파티에 참석버튼을 눌렀는지 여부도 받아야 함 (혹은 my페이지에서 받는 경우 일일이 비교(속도저하))
// 2. 본인이 리더인지 여부도 받거나 또는 리더id와 본인id비교로 판단 => 그럼 본인id필요(my페이지 담당자가 recoil로 본인id넣기)
// TODO: party와 my쪽 api가 나와야 함
