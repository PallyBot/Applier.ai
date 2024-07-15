import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { InteractionTitle } from "../interaction/InteractionTitle";

export const MessageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <TextInput label="senderId" source="senderId" />
        <ReferenceInput
          source="interaction.id"
          reference="Interaction"
          label="Interaction"
        >
          <SelectInput optionText={InteractionTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
