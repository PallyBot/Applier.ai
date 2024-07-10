import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const CandidateEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="firstName" source="firstName" />
        <TextInput label="email" source="email" type="email" />
        <div />
        <TextInput label="lastName" source="lastName" />
        <TextInput label="skills" multiline source="skills" />
        <TextInput label="domainExpertise" source="domainExpertise" />
        <NumberInput
          step={1}
          label="yearsOfExperience"
          source="yearsOfExperience"
        />
      </SimpleForm>
    </Edit>
  );
};
