import "./App.css";
import Appheader from "./components/Header/header.jsx";
import AppRoutes from "./components/Routes/approutes.jsx";
import SideMenu from "./components/sidemenu/sidemenu.jsx";

function App() {
  return (
    <div className="App">
      <Appheader />
      <br />
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
