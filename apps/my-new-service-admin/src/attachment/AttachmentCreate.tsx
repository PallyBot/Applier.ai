import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { JobRequirementTitle } from "../jobRequirement/JobRequirementTitle";

export const AttachmentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="fileUrl" source="fileUrl" />
        <TextInput label="fileType" source="fileType" />
        <ReferenceInput
          source="jobRequirement.id"
          reference="JobRequirement"
          label="JobRequirement"
        >
          <SelectInput optionText={JobRequirementTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
