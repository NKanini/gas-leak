import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { SensorWhereUniqueInput } from "../sensor/SensorWhereUniqueInput";

export type MaintenanceLogWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  maintenanceDate?: DateTimeNullableFilter;
  sensor?: SensorWhereUniqueInput;
};
