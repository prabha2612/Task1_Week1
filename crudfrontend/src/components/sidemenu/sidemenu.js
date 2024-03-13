import React from "react";
import "./sideMenu.css";
import { Sidemenudata } from "./sidemenudata.js";
import { useNavigate } from "react-router-dom";

const SideMenu = () => {
  const navigate = useNavigate();
  return (
    <div className="SideMenu">
      <ul className="SideMenuList">
        {Sidemenudata.map((val, key) => {
          return (
            <li
              key={key}
              className="row"
              id={window.location.pathname === val.link ? "active" : ""}
              onClick={() => {
                navigate("/dashboard");
              }}
            >
              <div id="icon">{val.icon}</div>
              <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideMenu;
