export interface ServiceResponse {
  data: {
    data: {
      id: string;
      type: string;
      attributes: {
        title: string;
        datetime: string;
      };
    },
    includes: any[];
  }
}
