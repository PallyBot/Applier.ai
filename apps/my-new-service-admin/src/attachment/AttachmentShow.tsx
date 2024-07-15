import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { JOBREQUIREMENT_TITLE_FIELD } from "../jobRequirement/JobRequirementTitle";

export const AttachmentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
