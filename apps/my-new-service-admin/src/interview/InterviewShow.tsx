import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { JOBPOSITION_TITLE_FIELD } from "../jobPosition/JobPositionTitle";

export const InterviewShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="date" source="date" />
        <TextField label="feedback" source="feedback" />
        <TextField label="interviewer" source="interviewer" />
        <TextField label="candidate" source="candidate" />
        <ReferenceField
          label="jobPosition"
          source="jobposition.id"
          reference="JobPosition"
        >
          <TextField source={JOBPOSITION_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
