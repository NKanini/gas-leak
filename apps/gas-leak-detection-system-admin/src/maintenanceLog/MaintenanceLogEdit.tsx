import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SensorTitle } from "../sensor/SensorTitle";

export const MaintenanceLogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="maintenanceDate" source="maintenanceDate" />
        <ReferenceInput source="sensor.id" reference="Sensor" label="Sensor">
          <SelectInput optionText={SensorTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
