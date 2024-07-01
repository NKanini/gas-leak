import { SensorCreateNestedManyWithoutLocationsInput } from "./SensorCreateNestedManyWithoutLocationsInput";

export type LocationCreateInput = {
  coordinates?: string | null;
  name?: string | null;
  sensors?: SensorCreateNestedManyWithoutLocationsInput;
};
