import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { RANKINGALGORITHM_TITLE_FIELD } from "../rankingAlgorithm/RankingAlgorithmTitle";

export const CandidateScoreList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"CandidateScores"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
