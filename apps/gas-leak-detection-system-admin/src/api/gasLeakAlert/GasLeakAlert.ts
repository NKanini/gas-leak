import { Sensor } from "../sensor/Sensor";

export type GasLeakAlert = {
  alertLevel: string | null;
  alertTime: Date | null;
  createdAt: Date;
  id: string;
  sensor?: Sensor | null;
  updatedAt: Date;
};
