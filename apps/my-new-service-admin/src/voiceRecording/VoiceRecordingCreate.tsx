import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { InteractionTitle } from "../interaction/InteractionTitle";

export const VoiceRecordingCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="fileUrl" source="fileUrl" />
        <NumberInput step={1} label="duration" source="duration" />
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
