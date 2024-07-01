import { GasLeakAlertCreateNestedManyWithoutSensorsInput } from "./GasLeakAlertCreateNestedManyWithoutSensorsInput";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { MaintenanceLogCreateNestedManyWithoutSensorsInput } from "./MaintenanceLogCreateNestedManyWithoutSensorsInput";

export type SensorCreateInput = {
  gasLeakAlerts?: GasLeakAlertCreateNestedManyWithoutSensorsInput;
  location?: LocationWhereUniqueInput | null;
  maintenanceLogs?: MaintenanceLogCreateNestedManyWithoutSensorsInput;
  serialNumber?: string | null;
  typeField?: string | null;
};
