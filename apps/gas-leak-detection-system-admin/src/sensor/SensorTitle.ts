import { Sensor as TSensor } from "../api/sensor/Sensor";

export const SENSOR_TITLE_FIELD = "serialNumber";

export const SensorTitle = (record: TSensor): string => {
  return record.serialNumber?.toString() || String(record.id);
};
