import { SensorUpdateManyWithoutLocationsInput } from "./SensorUpdateManyWithoutLocationsInput";

export type LocationUpdateInput = {
  coordinates?: string | null;
  name?: string | null;
  sensors?: SensorUpdateManyWithoutLocationsInput;
};
