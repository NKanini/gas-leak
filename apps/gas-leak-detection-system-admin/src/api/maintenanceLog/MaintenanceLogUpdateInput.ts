import { SensorWhereUniqueInput } from "../sensor/SensorWhereUniqueInput";

export type MaintenanceLogUpdateInput = {
  description?: string | null;
  maintenanceDate?: Date | null;
  sensor?: SensorWhereUniqueInput | null;
};
