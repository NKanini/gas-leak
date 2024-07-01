import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { SensorTitle } from "../sensor/SensorTitle";

export const LocationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="coordinates" source="coordinates" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="sensors"
          reference="Sensor"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SensorTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
