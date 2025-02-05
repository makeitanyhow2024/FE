// Get Date
export interface participant {
    bab_id: number;
    bab_name: string;
  }
  export interface party {
      party_id: number; 
      party_img: string;
    }
  
  export interface GetRestaurantListData {
    id: number;
    name: string; // 식당이름    
    bab_category: string; // 카테고리  
   // party_id: number; // 파티 아이디
  }
  
  export interface GetRestaurantDetailListData extends GetRestaurantListData {
    
    map_url: string; // 네이버지도 url
    parties: party[];//등록된 파티들 정보
  }
  