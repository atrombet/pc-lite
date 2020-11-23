export interface PeopleResponse {
  data: {
    data: {
      id: string;
      type: string;
      attributes: {
        first_name: string;
        last_name: string;
        email: string;
        phone: string;
      };
      relationships: any[];
    }[];
    includes: any[];
  }
}
