import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { JobPositionTitle } from "../jobPosition/JobPositionTitle";

export const InterviewEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="date" source="date" />
        <TextInput label="feedback" multiline source="feedback" />
        <TextInput label="interviewer" source="interviewer" />
        <TextInput label="candidate" source="candidate" type="email" />
        <ReferenceInput
          source="jobPosition.id"
          reference="JobPosition"
          label="jobPosition"
        >
          <SelectInput optionText={JobPositionTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
