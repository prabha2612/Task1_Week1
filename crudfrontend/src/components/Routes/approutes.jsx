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
        <Route path="editscope/:id" element={<EditScope/>} />
      </Route>
      <Route path="/projectstack">
        <Route index element={<Techstack />} />
        <Route path="edittechstack/:id" element={<EditTechstack/>} />
      </Route>
      <Route path="/opEscalationMatrix">
        <Route index element={<OpescMatrix />} />
        <Route path="opEscalationMatrix/:id" element={<EditOpescMatrix />} />
      </Route>
      <Route path="/finEscalationMatrix">
        <Route index element={<FinescMatrix />} />
        <Route path="finEscalationMatrix/:id" element={<EditFinescMatrix/>} />
      </Route>
      <Route path="/techEscalationmatrix">
        <Route index element={<TechescMatrix />} />
        <Route path="techEscalationmatrix/:id" element={<EditTechescMatrix/>} />
      </Route>
      <Route path="/Stakeholders">
        <Route index element={<Stakeholders />} />
        <Route path="editstakeholder/:id" element={<EditStakeholder/>} />
      </Route>
      <Route path="/riskprofiling">
        <Route index element={<RiskProfile />} />
        <Route path="editriskprofiling/:id" element={<EditRiskprofiling/>} />
      </Route>
      <Route path="/phases">
        <Route index element={<RiskProfile />} />
        <Route path="editphases/:id" element={<EditRiskprofiling/>} />
      </Route>
      <Route path="/sprintwise">
        <Route index element={<RiskProfile />} />
        <Route path="editsprint/:id" element={<EditRiskprofiling/>} />
      </Route>
      <Route path="/timeline">
        <Route index element={<Timelines />} />
        <Route path="edittimeline/:id" element={<EditTimelineModal />} />
      </Route>

    </Routes>
    // </BrowserRouter>
  );
}

export default AppRoutes;
