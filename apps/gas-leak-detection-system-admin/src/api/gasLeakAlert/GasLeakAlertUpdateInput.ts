import { SensorWhereUniqueInput } from "../sensor/SensorWhereUniqueInput";

export type GasLeakAlertUpdateInput = {
  alertLevel?: string | null;
  alertTime?: Date | null;
  sensor?: SensorWhereUniqueInput | null;
};
