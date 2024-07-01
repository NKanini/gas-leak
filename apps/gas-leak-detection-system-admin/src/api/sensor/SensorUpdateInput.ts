import { GasLeakAlertUpdateManyWithoutSensorsInput } from "./GasLeakAlertUpdateManyWithoutSensorsInput";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { MaintenanceLogUpdateManyWithoutSensorsInput } from "./MaintenanceLogUpdateManyWithoutSensorsInput";

export type SensorUpdateInput = {
  gasLeakAlerts?: GasLeakAlertUpdateManyWithoutSensorsInput;
  location?: LocationWhereUniqueInput | null;
  maintenanceLogs?: MaintenanceLogUpdateManyWithoutSensorsInput;
  serialNumber?: string | null;
  typeField?: string | null;
};
