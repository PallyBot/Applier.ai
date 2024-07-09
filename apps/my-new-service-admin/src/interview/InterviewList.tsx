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
import { CANDIDATE_TITLE_FIELD } from "../candidate/CandidateTitle";
import { JOBPOSITION_TITLE_FIELD } from "../jobPosition/JobPositionTitle";

export const InterviewList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Interviews"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="date" source="date" />
        <TextField label="feedback" source="feedback" />
        <TextField label="interviewer" source="interviewer" />
        <ReferenceField
          label="candidate"
          source="candidate.id"
          reference="Candidate"
        >
          <TextField source={CANDIDATE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="jobPosition"
          source="jobposition.id"
          reference="JobPosition"
        >
          <TextField source={JOBPOSITION_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
