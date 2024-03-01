import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Audit from "./components/get/audit";
import Add from "./components/add/addaudit";
import Edit from "./components/update/updateAudit";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Audit />,
    },
    {
      path: "/add",
      element: <Add />,
    },
    {
      path: "/edit/:id",
      element: <Edit />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
