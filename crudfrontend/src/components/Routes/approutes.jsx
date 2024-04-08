import { Routes, Route } from "react-router-dom";
import Projects from "../crudOperations/projects/Projects.jsx";
import Audit from "../crudOperations/auditHistory/audit.jsx";
import Budget from "../crudOperations/projectBudget/projectBudget.jsx";
import Version from "../crudOperations/versionHistory/VersionHistory.jsx";
import ProjectDescription from "../crudOperations/projectDescription/projectDescription.jsx";
import ProjectScope from "../crudOperations/scope/scope.jsx";
import Techstack from "../crudOperations/projectStack/techstack.jsx";
import TechescMatrix from "../crudOperations/techescMatrix/techescMatrix.jsx";
import OpescMatrix from "../crudOperations/opescMatrix/opeEscalationMatrix.jsx";
import FinescMatrix from "../crudOperations/finescMatrix/financialescMatrix.jsx";
import Stakeholders from "../crudOperations/stakeHolders/stakeHolders.jsx";
import RiskProfile from "../crudOperations/riskProfiling/riskprofiling.jsx";
import Phases from "../crudOperations/phases/phases.jsx";
import SprintWise from "../crudOperations/sprintWise/sprintWise.jsx";
import Timelines from "../crudOperations/timeline/timeline.jsx";
import MOM from "../crudOperations/momsOfClient/momsOfClient.jsx";
import Resources from "../crudOperations/resources/resources.jsx";
import ClientFeedback from "../crudOperations/clientFeedback/feedback.jsx";
import ProjectUpdates from "../crudOperations/projectUpdates/projectUpdates.jsx";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Projects />} />
      </Route>
      <Route path="/Audit">
        <Route index element={<Audit />} />
      </Route>
      <Route path="/Budget">
        <Route index element={<Budget />} />
      </Route>
      <Route path="/Version">
        <Route index element={<Version />} />
      </Route>
      <Route path="/Description">
        <Route index element={<ProjectDescription />} />
      </Route>
      <Route path="/scope">
        <Route index element={<ProjectScope />} />
      </Route>
      <Route path="/projectstack">
        <Route index element={<Techstack />} />
      </Route>
      <Route path="/opEscalationMatrix">
        <Route index element={<OpescMatrix />} />
      </Route>
      <Route path="/finEscalationMatrix">
        <Route index element={<FinescMatrix />} />
      </Route>
      <Route path="/techEscalationmatrix">
        <Route index element={<TechescMatrix />} />
      </Route>
      <Route path="/Stakeholders">
        <Route index element={<Stakeholders />} />
      </Route>
      <Route path="/riskprofiling">
        <Route index element={<RiskProfile />} />
      </Route>
      <Route path="/phases">
        <Route index element={<Phases />} />
      </Route>
      <Route path="/sprintwise">
        <Route index element={<SprintWise />} />
      </Route>
      <Route path="/timeline">
        <Route index element={<Timelines />} />
      </Route>
      <Route path="/resources">
        <Route index element={<Resources />} />
      </Route>
      <Route path="/clientfeedback">
        <Route index element={<ClientFeedback />} />
      </Route>
      <Route path="/projectupdates">
        <Route index element={<ProjectUpdates />} />
      </Route>
      <Route path="/moms">
        <Route index element={<MOM />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
