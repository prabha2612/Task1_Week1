import { Routes, Route } from "react-router-dom";
import Audit from "../get/audit.jsx";
import Budget from "../get/projectbudget.jsx";
import Editaudit from "../update/updateAudit.jsx";
import EditBudget from "../update/EditBudget.jsx";
import VersionHistory from "../get/VersionHistory.jsx";
import EditVersion from "../update/EditVersion.jsx";
import { Dashboard } from "../Dashboard/dashboard.jsx";

function AppRoutes() {
  return (
    // <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
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
    </Routes>
    // </BrowserRouter>
  );
}

export default AppRoutes;
