import { Routes, Route } from "react-router-dom";
import Audit from "../get/audit.jsx";
import Budget from "../get/projectbudget.jsx";
import Editaudit from "../update/updateAudit.jsx";
import EditBudget from "../update/EditBudget.jsx";
import VersionHistory from "../get/VersionHistory.jsx";
import EditVersion from "../update/EditVersion.jsx";
// import { Dashboard } from "../Dashboard/dashboard.jsx";
import Projects from "../get/Projects.jsx";
import EditProject from "../update/editProjects.jsx";
import ProjectDescription from "../get/projectdescription.jsx";
import EditDescription from "../update/editdescription.jsx";
import ProjectScope from "../get/scope.jsx";
import EditScope from "../update/editscope.jsx";
import Techstack from "../get/techstack.jsx";
import EditTechstack from "../update/edittechstack.jsx";
import EditTechescMatrix from "../update/edittechescmatrix.jsx";
import EditFinescMatrix from "../update/editfinescmatrix.jsx";
import EditOpescMatrix from "../update/editopescmatrix.jsx";
import OpescMatrix from "../get/opeescalationmatrix.jsx";
import FinescMatrix from "../get/financialescmatrix.jsx";
import TechescMatrix from "../get/techescmatrix.jsx";
import Stakeholders from "../get/stakeholders.jsx";
import EditStakeholder from "../update/editstakeholders.jsx";
import RiskProfile from "../get/riskprofiling.jsx";
import EditRiskprofiling from "../update/editRiskprofiling.jsx";
import Timelines from "../get/timeline.jsx";
import EditTimelineModal from "../update/edittimeline.jsx";
import Resources from "../get/resources.jsx";
import EditResourceModal from "../update/editresources.jsx";
import ClientFeedback from "../get/feedback.jsx";
import EditClientFeedback from "../update/editfeedback.jsx";
import Phases from "../get/phases.jsx";
import EditPhase from "../update/updatephases.jsx";
import SprintWise from "../get/sprintwise.jsx";
import EditSprintModal from "../update/editsprintwise.jsx";
import ProjectUpdates from "../get/projectupdates.jsx";
import EditProjectUpdate from "../update/editProjectupdates.jsx";
import MOM from "../get/momsofclient.jsx";
import EditMOM from "../update/editMoMs.jsx";

function AppRoutes() {
  return (
    // <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<Dashboard />} /> */}
      <Route path="/">
        <Route index element={<Projects />} />
        <Route path="editversion/:id" element={<EditProject />} />
      </Route>
      <Route path="/Audit">
        <Route index element={<Audit />} />
        <Route path="editaudit/:id" element={<Editaudit />} />
      </Route>
      <Route path="/Budget">
        <Route index element={<Budget />} />
        <Route path="editbudget/:id" element={<EditBudget />} />
      </Route>
      <Route path="/Version">
        <Route index element={<VersionHistory />} />
        <Route path="editversion/:id" element={<EditVersion />} />
      </Route>
      <Route path="/Description">
        <Route index element={<ProjectDescription />} />
        <Route path="editdescription/:id" element={<EditDescription />} />
      </Route>
      <Route path="/scope">
        <Route index element={<ProjectScope />} />
        <Route path="editscope/:id" element={<EditScope />} />
      </Route>
      <Route path="/projectstack">
        <Route index element={<Techstack />} />
        <Route path="edittechstack/:id" element={<EditTechstack />} />
      </Route>
      <Route path="/opEscalationMatrix">
        <Route index element={<OpescMatrix />} />
        <Route path="opEscalationMatrix/:id" element={<EditOpescMatrix />} />
      </Route>
      <Route path="/finEscalationMatrix">
        <Route index element={<FinescMatrix />} />
        <Route path="finEscalationMatrix/:id" element={<EditFinescMatrix />} />
      </Route>
      <Route path="/techEscalationmatrix">
        <Route index element={<TechescMatrix />} />
        <Route
          path="techEscalationmatrix/:id"
          element={<EditTechescMatrix />}
        />
      </Route>
      <Route path="/Stakeholders">
        <Route index element={<Stakeholders />} />
        <Route path="editstakeholder/:id" element={<EditStakeholder />} />
      </Route>
      <Route path="/riskprofiling">
        <Route index element={<RiskProfile />} />
        <Route path="editriskprofiling/:id" element={<EditRiskprofiling />} />
      </Route>
      <Route path="/phases">
        <Route index element={<Phases />} />
        <Route path="editphases/:id" element={<EditPhase />} />
      </Route>
      <Route path="/sprintwise">
        <Route index element={<SprintWise />} />
        <Route path="editsprint/:id" element={<EditSprintModal />} />
      </Route>
      <Route path="/timeline">
        <Route index element={<Timelines />} />
        <Route path="edittimeline/:id" element={<EditTimelineModal />} />
      </Route>
      <Route path="/resources">
        <Route index element={<Resources />} />
        <Route path="editresources/:id" element={<EditResourceModal />} />
      </Route>
      <Route path="/clientfeedback">
        <Route index element={<ClientFeedback />} />
        <Route path="editclientfeedback/:id" element={<EditClientFeedback />} />
      </Route>
      <Route path="/projectUpdates">
        <Route index element={<ProjectUpdates />} />
        <Route path="editupdates/:id" element={<EditProjectUpdate />} />
      </Route>
      <Route path="/MoMs">
        <Route index element={<MOM />} />
        <Route path="editMoMs/:id" element={<EditMOM />} />
      </Route>
    </Routes>

    // </BrowserRouter>
  );
}

export default AppRoutes;
