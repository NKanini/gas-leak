import { GasLeakAlertListRelationFilter } from "../gasLeakAlert/GasLeakAlertListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { MaintenanceLogListRelationFilter } from "../maintenanceLog/MaintenanceLogListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SensorWhereInput = {
  gasLeakAlerts?: GasLeakAlertListRelationFilter;
  id?: StringFilter;
  location?: LocationWhereUniqueInput;
  maintenanceLogs?: MaintenanceLogListRelationFilter;
  serialNumber?: StringNullableFilter;
  typeField?: StringNullableFilter;
};
