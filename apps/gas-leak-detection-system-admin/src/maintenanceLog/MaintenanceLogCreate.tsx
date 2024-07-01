import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SensorTitle } from "../sensor/SensorTitle";

export const MaintenanceLogCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="maintenanceDate" source="maintenanceDate" />
        <ReferenceInput source="sensor.id" reference="Sensor" label="Sensor">
          <SelectInput optionText={SensorTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
