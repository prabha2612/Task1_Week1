import { Routes, Route } from "react-router-dom";
import Audit from "../get/audit.jsx";
import Budget from "../get/projectbudget.jsx";
import Editaudit from "../update/updateAudit.jsx";
import EditBudget from "../update/EditBudget.jsx";

function AppRoutes() {
  return (
    // <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Audit />} />
        <Route path="editaudit/:id" element={<Editaudit />} />
      </Route>
      <Route path="/Budget">
        <Route index element={<Budget />} />
        <Route path="editbudget/:id" element={<EditBudget />} />
      </Route>
      {/* <Route path="/dashboard">
        <Route index element={<Audit />} />
        <Route path="editaudit/:id" element={<Editaudit />} />
      </Route> */}
    </Routes>
    // </BrowserRouter>
  );
}

export default AppRoutes;
