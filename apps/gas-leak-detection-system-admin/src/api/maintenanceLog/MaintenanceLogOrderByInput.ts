import { SortOrder } from "../../util/SortOrder";

export type MaintenanceLogOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  maintenanceDate?: SortOrder;
  sensorId?: SortOrder;
  updatedAt?: SortOrder;
};
