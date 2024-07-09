import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { InterviewTitle } from "../interview/InterviewTitle";

export const CandidateEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="firstName" source="firstName" />
        <TextInput label="email" source="email" type="email" />
        <div />
        <TextInput label="lastName" source="lastName" />
        <ReferenceArrayInput
          source="interviews"
          reference="Interview"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InterviewTitle} />
        </ReferenceArrayInput>
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
