import { GasLeakAlert } from "../gasLeakAlert/GasLeakAlert";
import { Location } from "../location/Location";
import { MaintenanceLog } from "../maintenanceLog/MaintenanceLog";

export type Sensor = {
  createdAt: Date;
  gasLeakAlerts?: Array<GasLeakAlert>;
  id: string;
  location?: Location | null;
  maintenanceLogs?: Array<MaintenanceLog>;
  serialNumber: string | null;
  typeField: string | null;
  updatedAt: Date;
};
