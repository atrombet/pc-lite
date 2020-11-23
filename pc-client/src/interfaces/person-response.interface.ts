export interface PersonResponse {
  data: {
    data: {
      id: string;
      type: string;
      attributes: {
        first_name: string;
        last_name: string;
        email: string;
        phone: string;
      }
    },
    includes: any[];
  }
}