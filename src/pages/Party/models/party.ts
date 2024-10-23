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

// TODO: api 케밥, 카멜 혼용 => camelCase로 통일화
// TODO: GET /api/parties
// 1. 파티 리더의 name도 받아야 함 디자인 화면에 리더 이름 나옴
// 2. 파티 목록에서 왼쪽에 넣을 이미지도 받아야 함
// 3. 파티 장소 데이터도 받아야 함
// 4.  status: string; 이건 어떤 상태를 말하는 것인지?
// 5. date 날짜 형식 string/Date 혼용 => 모두 string 형식으로 통일 (데이터 가공은 백엔드에서 하는게 좋음)
// 6.   participants: participant[]; // 파티원 정보 데이터는 목록화면에서는 필요 없어 보임, 파티원 인원수만 필요
//TODO: GET /api/parties/{partyID}
// 1. 본인이 이 파티에 참석버튼을 눌렀는지 여부도 받아야 함 (혹은 my페이지에서 받는 경우 일일이 비교(속도저하))
// 2. 본인이 리더인지 여부도 받거나 또는 리더id와 본인id비교로 판단 => 그럼 본인id필요(my페이지 담당자가 recoil로 본인id넣기)
//TODO: party와 my쪽 api가 나와야 함, url형식 사용자 직관성을 위해 "/party-detail"처럼 케밥케이스로 할지 카멜케이스로 할지
// TODO: 카테고리 리스트 api로 받아와야 함
