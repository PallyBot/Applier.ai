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

import { INTERACTION_TITLE_FIELD } from "./InteractionTitle";

export const InteractionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="interactionType" source="interactionType" />
        <TextField label="timestamp" source="timestamp" />
        <ReferenceManyField
          reference="VoiceRecording"
          target="interactionId"
          label="VoiceRecordings"
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
        </ReferenceManyField>
        <ReferenceManyField
          reference="Message"
          target="interactionId"
          label="Messages"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="content" source="content" />
            <TextField label="senderId" source="senderId" />
            <ReferenceField
              label="Interaction"
              source="interaction.id"
              reference="Interaction"
            >
              <TextField source={INTERACTION_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
