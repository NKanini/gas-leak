import { SensorWhereUniqueInput } from "../sensor/SensorWhereUniqueInput";

export type GasLeakAlertCreateInput = {
  alertLevel?: string | null;
  alertTime?: Date | null;
  sensor?: SensorWhereUniqueInput | null;
};
