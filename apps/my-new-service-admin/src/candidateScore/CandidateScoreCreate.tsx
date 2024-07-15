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

import { RankingAlgorithmTitle } from "../rankingAlgorithm/RankingAlgorithmTitle";

export const CandidateScoreCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
