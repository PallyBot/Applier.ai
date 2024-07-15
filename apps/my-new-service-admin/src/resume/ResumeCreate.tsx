import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ResumeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="fileUrl" source="fileUrl" />
        <TextInput label="resumeText" multiline source="resumeText" />
      </SimpleForm>
    </Create>
  );
};
