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
  maxpeople: number;
  duedate: Date; // 이 날짜형식은 Date 형식이 다른 이유가 있는지? string으로 보내주는게 편함
  status: string; // 어떤 상태를 말하는 것인지?
  bab_category: string; // 카테고리

  party_leader: number; // 파티 개설자(리더) 아이디
  // 파티 리더의 name도 받아야 함 디자인 화면에 리더 이름 나옴
  // 파티 목록에서 왼쪽에 넣을 이미지도 받아야 함
  // 파티 장소 데이터도 받아야 함
  participants: participant[]; // 파티원 정보
}

export interface GetPartyDetailData extends GetPartyListData {
  // 본인이 이 파티에 참석버튼을 눌렀는지 여부도 받아야 함
  // 본인이 리더인지 여부도 받아야 함 또는 리더id와 본인id비교로 판단 => 그럼 본인id필요(my페이지 만드는 사람이 recoil로 본인id넣기)
  icon_id: number; // 위 GetPartyListData 타입에서 이것만 추가하면 됨
}
