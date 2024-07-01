import { Sensor } from "../sensor/Sensor";

export type Location = {
  coordinates: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  sensors?: Array<Sensor>;
  updatedAt: Date;
};
