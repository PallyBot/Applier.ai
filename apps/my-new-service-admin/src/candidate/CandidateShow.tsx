import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CANDIDATE_TITLE_FIELD } from "./CandidateTitle";
import { JOBPOSITION_TITLE_FIELD } from "../jobPosition/JobPositionTitle";

export const CandidateShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="firstName" source="firstName" />
        <TextField label="email" source="email" />
        <TextField label="resume" source="resume" />
        <TextField label="lastName" source="lastName" />
        <TextField label="skills" source="skills" />
        <TextField label="domainExpertise" source="domainExpertise" />
        <TextField label="yearsOfExperience" source="yearsOfExperience" />
        <ReferenceManyField
          reference="Interview"
          target="candidateId"
          label="Interviews"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="date" source="date" />
            <TextField label="feedback" source="feedback" />
            <TextField label="interviewer" source="interviewer" />
            <ReferenceField
              label="candidate"
              source="candidate.id"
              reference="Candidate"
            >
              <TextField source={CANDIDATE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="jobPosition"
              source="jobposition.id"
              reference="JobPosition"
            >
              <TextField source={JOBPOSITION_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
