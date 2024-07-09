import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { InterviewTitle } from "../interview/InterviewTitle";

export const CandidateCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
