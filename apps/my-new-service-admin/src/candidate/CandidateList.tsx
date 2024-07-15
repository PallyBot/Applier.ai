import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CandidateList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Candidates"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="firstName" source="firstName" />
        <TextField label="email" source="email" />
        <TextField label="resume" source="resume" />
        <TextField label="lastName" source="lastName" />
        <TextField label="skills" source="skills" />
        <TextField label="domainExpertise" source="domainExpertise" />
        <TextField label="yearsOfExperience" source="yearsOfExperience" />
      </Datagrid>
    </List>
  );
};
