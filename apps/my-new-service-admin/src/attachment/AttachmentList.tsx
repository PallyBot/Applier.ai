import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { JOBREQUIREMENT_TITLE_FIELD } from "../jobRequirement/JobRequirementTitle";

export const AttachmentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Attachments"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
