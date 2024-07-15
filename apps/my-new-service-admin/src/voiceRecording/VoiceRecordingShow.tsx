import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { INTERACTION_TITLE_FIELD } from "../interaction/InteractionTitle";

export const VoiceRecordingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
