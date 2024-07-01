import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SensorWhereUniqueInput } from "../sensor/SensorWhereUniqueInput";

export type GasLeakAlertWhereInput = {
  alertLevel?: StringNullableFilter;
  alertTime?: DateTimeNullableFilter;
  id?: StringFilter;
  sensor?: SensorWhereUniqueInput;
};
