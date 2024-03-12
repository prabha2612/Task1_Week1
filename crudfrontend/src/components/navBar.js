import React, { useState } from "react";
import Audit from "./get/audit";
import Budget from "./get/projectbudget";
import "./navbar.css";


const Navbar = () => {
  const [activeTab, setActiveTab] = useState("projectDetails");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <nav>
        <ul>
          <li
            onClick={() => handleTabChange("auditHistory")}
            className={activeTab === "auditHistory" ? "active" : ""}
          >
            Audit History
          </li>
          <li
            onClick={() => handleTabChange("projectBudget")}
            className={activeTab === "projectBudget" ? "active" : ""}
          >
            Project Budget
          </li>
        </ul>
      </nav>
      <div className="content">
        {activeTab === "auditHistory" && <Audit />}
        {activeTab === "projectBudget" && <Budget />}
        {/* {activeTab === "contactUs" && <ContactUs />} */}
      </div>
    </div>
  );
};

export default Navbar;
