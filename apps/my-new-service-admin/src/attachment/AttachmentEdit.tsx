import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { JobRequirementTitle } from "../jobRequirement/JobRequirementTitle";

export const AttachmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
