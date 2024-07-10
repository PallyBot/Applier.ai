import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { RANKINGALGORITHM_TITLE_FIELD } from "../rankingAlgorithm/RankingAlgorithmTitle";

export const CandidateScoreShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
