import { Sensor } from "../sensor/Sensor";

export type MaintenanceLog = {
  createdAt: Date;
  description: string | null;
  id: string;
  maintenanceDate: Date | null;
  sensor?: Sensor | null;
  updatedAt: Date;
};
