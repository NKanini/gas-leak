import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { SENSOR_TITLE_FIELD } from "./SensorTitle";
import { LOCATION_TITLE_FIELD } from "../location/LocationTitle";

export const SensorShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Location"
          source="location.id"
          reference="Location"
        >
          <TextField source={LOCATION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="serialNumber" source="serialNumber" />
        <TextField label="type" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="GasLeakAlert"
          target="sensorId"
          label="GasLeakAlerts"
        >
          <Datagrid rowClick="show">
            <TextField label="alertLevel" source="alertLevel" />
            <TextField label="alertTime" source="alertTime" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Sensor"
              source="sensor.id"
              reference="Sensor"
            >
              <TextField source={SENSOR_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="MaintenanceLog"
          target="sensorId"
          label="MaintenanceLogs"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="maintenanceDate" source="maintenanceDate" />
            <ReferenceField
              label="Sensor"
              source="sensor.id"
              reference="Sensor"
            >
              <TextField source={SENSOR_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
