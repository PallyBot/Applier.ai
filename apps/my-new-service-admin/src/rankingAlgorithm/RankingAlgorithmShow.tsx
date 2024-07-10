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

import { RANKINGALGORITHM_TITLE_FIELD } from "./RankingAlgorithmTitle";

export const RankingAlgorithmShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <TextField label="description" source="description" />
        <ReferenceManyField
          reference="CandidateScore"
          target="rankingAlgorithmId"
          label="CandidateScores"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="candidateId" source="candidateId" />
            <TextField label="score" source="score" />
            <ReferenceField
              label="RankingAlgorithm"
              source="rankingalgorithm.id"
              reference="RankingAlgorithm"
            >
              <TextField source={RANKINGALGORITHM_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
