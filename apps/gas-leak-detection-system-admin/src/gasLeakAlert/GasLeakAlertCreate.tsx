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

export const GasLeakAlertCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="alertLevel" source="alertLevel" />
        <DateTimeInput label="alertTime" source="alertTime" />
        <ReferenceInput source="sensor.id" reference="Sensor" label="Sensor">
          <SelectInput optionText={SensorTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
