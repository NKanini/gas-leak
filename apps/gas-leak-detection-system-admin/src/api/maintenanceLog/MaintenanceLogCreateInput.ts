import { SensorWhereUniqueInput } from "../sensor/SensorWhereUniqueInput";

export type MaintenanceLogCreateInput = {
  description?: string | null;
  maintenanceDate?: Date | null;
  sensor?: SensorWhereUniqueInput | null;
};
