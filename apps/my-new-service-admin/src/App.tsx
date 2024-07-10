import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CandidateList } from "./candidate/CandidateList";
import { CandidateCreate } from "./candidate/CandidateCreate";
import { CandidateEdit } from "./candidate/CandidateEdit";
import { CandidateShow } from "./candidate/CandidateShow";
import { RecruiterList } from "./recruiter/RecruiterList";
import { RecruiterCreate } from "./recruiter/RecruiterCreate";
import { RecruiterEdit } from "./recruiter/RecruiterEdit";
import { RecruiterShow } from "./recruiter/RecruiterShow";
import { InterviewList } from "./interview/InterviewList";
import { InterviewCreate } from "./interview/InterviewCreate";
import { InterviewEdit } from "./interview/InterviewEdit";
import { InterviewShow } from "./interview/InterviewShow";
import { JobPositionList } from "./jobPosition/JobPositionList";
import { JobPositionCreate } from "./jobPosition/JobPositionCreate";
import { JobPositionEdit } from "./jobPosition/JobPositionEdit";
import { JobPositionShow } from "./jobPosition/JobPositionShow";
import { MessageList } from "./message/MessageList";
import { MessageCreate } from "./message/MessageCreate";
import { MessageEdit } from "./message/MessageEdit";
import { MessageShow } from "./message/MessageShow";
import { InteractionList } from "./interaction/InteractionList";
import { InteractionCreate } from "./interaction/InteractionCreate";
import { InteractionEdit } from "./interaction/InteractionEdit";
import { InteractionShow } from "./interaction/InteractionShow";
import { JobRequirementList } from "./jobRequirement/JobRequirementList";
import { JobRequirementCreate } from "./jobRequirement/JobRequirementCreate";
import { JobRequirementEdit } from "./jobRequirement/JobRequirementEdit";
import { JobRequirementShow } from "./jobRequirement/JobRequirementShow";
import { AttachmentList } from "./attachment/AttachmentList";
import { AttachmentCreate } from "./attachment/AttachmentCreate";
import { AttachmentEdit } from "./attachment/AttachmentEdit";
import { AttachmentShow } from "./attachment/AttachmentShow";
import { VoiceRecordingList } from "./voiceRecording/VoiceRecordingList";
import { VoiceRecordingCreate } from "./voiceRecording/VoiceRecordingCreate";
import { VoiceRecordingEdit } from "./voiceRecording/VoiceRecordingEdit";
import { VoiceRecordingShow } from "./voiceRecording/VoiceRecordingShow";
import { CandidateScoreList } from "./candidateScore/CandidateScoreList";
import { CandidateScoreCreate } from "./candidateScore/CandidateScoreCreate";
import { CandidateScoreEdit } from "./candidateScore/CandidateScoreEdit";
import { CandidateScoreShow } from "./candidateScore/CandidateScoreShow";
import { RankingAlgorithmList } from "./rankingAlgorithm/RankingAlgorithmList";
import { RankingAlgorithmCreate } from "./rankingAlgorithm/RankingAlgorithmCreate";
import { RankingAlgorithmEdit } from "./rankingAlgorithm/RankingAlgorithmEdit";
import { RankingAlgorithmShow } from "./rankingAlgorithm/RankingAlgorithmShow";
import { CandidateApplicationList } from "./candidateApplication/CandidateApplicationList";
import { CandidateApplicationCreate } from "./candidateApplication/CandidateApplicationCreate";
import { CandidateApplicationEdit } from "./candidateApplication/CandidateApplicationEdit";
import { CandidateApplicationShow } from "./candidateApplication/CandidateApplicationShow";
import { ResumeList } from "./resume/ResumeList";
import { ResumeCreate } from "./resume/ResumeCreate";
import { ResumeEdit } from "./resume/ResumeEdit";
import { ResumeShow } from "./resume/ResumeShow";
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
          name="Candidate"
          list={CandidateList}
          edit={CandidateEdit}
          create={CandidateCreate}
          show={CandidateShow}
        />
        <Resource
          name="Recruiter"
          list={RecruiterList}
          edit={RecruiterEdit}
          create={RecruiterCreate}
          show={RecruiterShow}
        />
        <Resource
          name="Interview"
          list={InterviewList}
          edit={InterviewEdit}
          create={InterviewCreate}
          show={InterviewShow}
        />
        <Resource
          name="JobPosition"
          list={JobPositionList}
          edit={JobPositionEdit}
          create={JobPositionCreate}
          show={JobPositionShow}
        />
        <Resource
          name="Message"
          list={MessageList}
          edit={MessageEdit}
          create={MessageCreate}
          show={MessageShow}
        />
        <Resource
          name="Interaction"
          list={InteractionList}
          edit={InteractionEdit}
          create={InteractionCreate}
          show={InteractionShow}
        />
        <Resource
          name="JobRequirement"
          list={JobRequirementList}
          edit={JobRequirementEdit}
          create={JobRequirementCreate}
          show={JobRequirementShow}
        />
        <Resource
          name="Attachment"
          list={AttachmentList}
          edit={AttachmentEdit}
          create={AttachmentCreate}
          show={AttachmentShow}
        />
        <Resource
          name="VoiceRecording"
          list={VoiceRecordingList}
          edit={VoiceRecordingEdit}
          create={VoiceRecordingCreate}
          show={VoiceRecordingShow}
        />
        <Resource
          name="CandidateScore"
          list={CandidateScoreList}
          edit={CandidateScoreEdit}
          create={CandidateScoreCreate}
          show={CandidateScoreShow}
        />
        <Resource
          name="RankingAlgorithm"
          list={RankingAlgorithmList}
          edit={RankingAlgorithmEdit}
          create={RankingAlgorithmCreate}
          show={RankingAlgorithmShow}
        />
        <Resource
          name="CandidateApplication"
          list={CandidateApplicationList}
          edit={CandidateApplicationEdit}
          create={CandidateApplicationCreate}
          show={CandidateApplicationShow}
        />
        <Resource
          name="Resume"
          list={ResumeList}
          edit={ResumeEdit}
          create={ResumeCreate}
          show={ResumeShow}
        />
      </Admin>
    </div>
  );
};

export default App;
