import React, { useEffect, useState } from "react";
import "./audit.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Addprojectbudget from "../add/addprojectbudget.jsx";
// import toast from "react-hot-toast";

const Budget = () => {
  const [budgets, setbudgets] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://localhost:4000/api/budget/getbudget"
      );
      setbudgets(response.data);
    };

    fetchData();
  }, []);

  return (
    <div className="AuditHistory">
      {/* <Link to={"/add"} className="addButton">
        Add audit
      </Link> */}
      <button onClick={openModal} className="addButton">
        Add ProjectBudget
      </button>
      {isModalOpen && (
        <Addprojectbudget isOpen={isModalOpen} onClose={closeModal} />
      )}
      <table border={0} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Project Type  </th>
            <th>Duration</th>
            <th>Budgeted Hours</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {budgets.map((budget, index) => {
            return (
              <tr key={budget._id}>
                <td>{index + 1}</td>
                <td>{budget.projecttype}</td>
                <td>{budget.Duration}</td>
                <td>{budget.budgetedhours}</td>
                <td className="actionButton">
                  <Link to={"/editbudget/" + budget._id}>
                    <i className="fa-solid fa-pen-to-square"></i>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Budget;
