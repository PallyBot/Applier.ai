import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { RecruiterList } from "./recruiter/RecruiterList";
import { RecruiterCreate } from "./recruiter/RecruiterCreate";
import { RecruiterEdit } from "./recruiter/RecruiterEdit";
import { RecruiterShow } from "./recruiter/RecruiterShow";
import { CandidateList } from "./candidate/CandidateList";
import { CandidateCreate } from "./candidate/CandidateCreate";
import { CandidateEdit } from "./candidate/CandidateEdit";
import { CandidateShow } from "./candidate/CandidateShow";
import { JobPositionList } from "./jobPosition/JobPositionList";
import { JobPositionCreate } from "./jobPosition/JobPositionCreate";
import { JobPositionEdit } from "./jobPosition/JobPositionEdit";
import { JobPositionShow } from "./jobPosition/JobPositionShow";
import { InterviewList } from "./interview/InterviewList";
import { InterviewCreate } from "./interview/InterviewCreate";
import { InterviewEdit } from "./interview/InterviewEdit";
import { InterviewShow } from "./interview/InterviewShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"My New Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Recruiter"
          list={RecruiterList}
          edit={RecruiterEdit}
          create={RecruiterCreate}
          show={RecruiterShow}
        />
        <Resource
          name="Candidate"
          list={CandidateList}
          edit={CandidateEdit}
          create={CandidateCreate}
          show={CandidateShow}
        />
        <Resource
          name="JobPosition"
          list={JobPositionList}
          edit={JobPositionEdit}
          create={JobPositionCreate}
          show={JobPositionShow}
        />
        <Resource
          name="Interview"
          list={InterviewList}
          edit={InterviewEdit}
          create={InterviewCreate}
          show={InterviewShow}
        />
      </Admin>
    </div>
  );
};

export default App;
