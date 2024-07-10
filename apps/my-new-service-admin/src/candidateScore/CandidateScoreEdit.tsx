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

import { RankingAlgorithmTitle } from "../rankingAlgorithm/RankingAlgorithmTitle";

export const CandidateScoreEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="candidateId" source="candidateId" />
        <NumberInput label="score" source="score" />
        <ReferenceInput
          source="rankingAlgorithm.id"
          reference="RankingAlgorithm"
          label="RankingAlgorithm"
        >
          <SelectInput optionText={RankingAlgorithmTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
