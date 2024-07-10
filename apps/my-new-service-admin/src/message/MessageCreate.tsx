import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { InteractionTitle } from "../interaction/InteractionTitle";

export const MessageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
