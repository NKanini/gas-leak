import { SortOrder } from "../../util/SortOrder";

export type SensorOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  locationId?: SortOrder;
  serialNumber?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
