import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { InteractionTitle } from "../interaction/InteractionTitle";

export const VoiceRecordingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
