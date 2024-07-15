import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ResumeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="fileUrl" source="fileUrl" />
        <TextInput label="resumeText" multiline source="resumeText" />
      </SimpleForm>
    </Edit>
  );
};
