import { Routes, Route } from "react-router-dom";
import Audit from "../get/audit.jsx";
import Budget from "../get/projectbudget.jsx";
import VersionHistory from "../get/VersionHistory.jsx";
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
import SprintWise from "../get/sprintwise.jsx";
import EditSprintModal from "../update/editsprintwise.jsx";
import ProjectUpdates from "../get/projectupdates.jsx";
import EditProjectUpdate from "../update/editProjectupdates.jsx";
import MOM from "../get/momsofclient.jsx";
import EditMOM from "../update/editMoMs.jsx";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Projects />} />
        <Route path="editprojects/:id" element={<EditProject />} />
      </Route>
      <Route path="/audit">
        <Route index element={<Audit />} />
      </Route>
      <Route path="/budget">
        <Route index element={<Budget />} />
      </Route>
      <Route path="/version">
        <Route index element={<VersionHistory />} />
      </Route>
      <Route path="/description">
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
      <Route path="/opescalationmatrix">
        <Route index element={<OpescMatrix />} />
        <Route path="editopescmatrix/:id" element={<EditOpescMatrix />} />
      </Route>
      <Route path="/finescalationmatrix">
        <Route index element={<FinescMatrix />} />
        <Route path="editfinescmatrix/:id" element={<EditFinescMatrix />} />
      </Route>
      <Route path="/techescalationmatrix">
        <Route index element={<TechescMatrix />} />
        <Route path="edittecescmatrix/:id" element={<EditTechescMatrix />} />
      </Route>
      <Route path="/stakeholders">
        <Route index element={<Stakeholders />} />
        <Route path="editstakeholder/:id" element={<EditStakeholder />} />
      </Route>
      <Route path="/riskprofiling">
        <Route index element={<RiskProfile />} />
        <Route path="editriskprofiling/:id" element={<EditRiskprofiling />} />
      </Route>
      <Route path="/phases">
        <Route index element={<Phases />} />
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
      <Route path="/projectupdates">
        <Route index element={<ProjectUpdates />} />
        <Route path="editupdates/:id" element={<EditProjectUpdate />} />
      </Route>
      <Route path="/moms">
        <Route index element={<MOM />} />
        <Route path="editmoms/:id" element={<EditMOM />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
