import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { CandidateTitle } from "../candidate/CandidateTitle";
import { JobPositionTitle } from "../jobPosition/JobPositionTitle";

export const InterviewEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="candidate.id"
          reference="Candidate"
          label="candidate"
        >
          <SelectInput optionText={CandidateTitle} />
        </ReferenceInput>
        <DateTimeInput label="date" source="date" />
        <TextInput label="feedback" multiline source="feedback" />
        <TextInput label="interviewer" source="interviewer" />
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
