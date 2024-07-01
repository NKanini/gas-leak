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

export const GasLeakAlertEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="alertLevel" source="alertLevel" />
        <DateTimeInput label="alertTime" source="alertTime" />
        <ReferenceInput source="sensor.id" reference="Sensor" label="Sensor">
          <SelectInput optionText={SensorTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
