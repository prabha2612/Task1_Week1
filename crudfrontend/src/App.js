import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Audit from "./components/get/audit";
import Add from "./components/add/addaudit";
import Edit from "./components/update/updateAudit";
import Sidemenu from "./components/sidemenu/sidemenu.js";
import Appheader from "./components/Header/header.js";
import Content from "./components/Content/Pagecontent.js";
import { Space } from "antd";

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
      <Appheader />
      <Space className="SideMenuandPageContent"> 
        <Sidemenu>
          <Content>
            <RouterProvider router={route}></RouterProvider>
          </Content>
        </Sidemenu>
      </Space>
    </div>
  );
}

export default App;
