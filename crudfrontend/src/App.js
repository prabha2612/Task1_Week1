import "./App.css";
import Appheader from "./components/Header/header.js";
import AppRoutes from "./components/Routes/approutes.js";
import SideMenu from "./components/sidemenu/sidemenu.js";

function App() {
  return (
    <div className="App">
      <Appheader />
      <div className="content-container">
        <SideMenu />
        <div className="main-content">
          <AppRoutes />
        </div>
      </div>
    </div>
  );
}

export default App;
