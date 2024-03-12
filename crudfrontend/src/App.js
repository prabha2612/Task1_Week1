import "./App.css";
import { Route, Routes } from "react-router-dom";
import Sidemenu from "./components/sidemenu/sidemenu.js";
import Appheader from "./components/Header/header.js";
import Content from "./components/Content/Pagecontent.js";
import { Space } from "antd";
import Editaudit from "./components/update/updateAudit";
import Navbar from "./components/navBar.js";

function App() {
  return (
    <div className="App">
      <Appheader />
      <div className="NavbarContainer">
  <Navbar />
</div>
      {/* <Space> */}
        <Sidemenu className="SideMenu" />
        {/* <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/editaudit/:id" element={<Editaudit />} />
        </Routes> */}
      {/* </Space> */}
    </div>
  );
}

export default App;
