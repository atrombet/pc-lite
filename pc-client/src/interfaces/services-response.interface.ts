export interface ServicesResponse {
  data: {
    data: {
      id: string;
      type: string;
      attributes: {
        title: string;
        datetime: string;
      };
      relationships: any;
    }[];
    included: any;
  };
}