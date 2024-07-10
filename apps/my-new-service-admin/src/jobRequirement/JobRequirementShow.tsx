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

import { JOBREQUIREMENT_TITLE_FIELD } from "./JobRequirementTitle";

export const JobRequirementShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="title" source="title" />
        <TextField label="description" source="description" />
        <TextField label="createdBy" source="createdBy" />
        <ReferenceManyField
          reference="Attachment"
          target="jobRequirementId"
          label="Attachments"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="fileUrl" source="fileUrl" />
            <TextField label="fileType" source="fileType" />
            <ReferenceField
              label="JobRequirement"
              source="jobrequirement.id"
              reference="JobRequirement"
            >
              <TextField source={JOBREQUIREMENT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
