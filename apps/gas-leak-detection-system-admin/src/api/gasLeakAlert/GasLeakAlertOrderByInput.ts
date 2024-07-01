import { SortOrder } from "../../util/SortOrder";

export type GasLeakAlertOrderByInput = {
  alertLevel?: SortOrder;
  alertTime?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  sensorId?: SortOrder;
  updatedAt?: SortOrder;
};
