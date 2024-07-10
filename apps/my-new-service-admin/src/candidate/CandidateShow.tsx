import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

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
      </SimpleShowLayout>
    </Show>
  );
};
