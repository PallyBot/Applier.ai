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
import { INTERACTION_TITLE_FIELD } from "../interaction/InteractionTitle";

export const VoiceRecordingList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"VoiceRecordings"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="fileUrl" source="fileUrl" />
        <TextField label="duration" source="duration" />
        <ReferenceField
          label="Interaction"
          source="interaction.id"
          reference="Interaction"
        >
          <TextField source={INTERACTION_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
