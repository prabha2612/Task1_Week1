import { Routes, Route} from "react-router-dom";
import Audit from "../get/audit.jsx";
import Budget from "../get/projectbudget.jsx";
import Editaudit from "../update/updateAudit.jsx";

function AppRoutes() {
    return (
      // <BrowserRouter>
      <Routes>
        <Route path="/dashboard">
          <Route index element={<Audit />} />
          <Route path="editaudit/:id" element={<Editaudit />} />
        </Route>
        {/* <Route path="/AuditHistory">
          <Route index element={<Audit />} />
          <Route path="editaudit/:id" element={<Editaudit />} />
        </Route>
        <Route path="/dashboard">
          <Route index element={<Audit />} />
          <Route path="editaudit/:id" element={<Editaudit />} />
        </Route> */}
      </Routes>
      // </BrowserRouter>
    );
}

export default AppRoutes;