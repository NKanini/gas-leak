import { SortOrder } from "../../util/SortOrder";

export type LocationOrderByInput = {
  coordinates?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
