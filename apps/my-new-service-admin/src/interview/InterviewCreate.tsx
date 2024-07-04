import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { CandidateTitle } from "../candidate/CandidateTitle";
import { JobPositionTitle } from "../jobPosition/JobPositionTitle";

export const InterviewCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
