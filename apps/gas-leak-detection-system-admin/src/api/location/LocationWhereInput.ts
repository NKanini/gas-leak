import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SensorListRelationFilter } from "../sensor/SensorListRelationFilter";

export type LocationWhereInput = {
  coordinates?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  sensors?: SensorListRelationFilter;
};
