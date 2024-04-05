import React, { useEffect, useState } from "react";
import "./audit.css";
import axios from "axios";
import Addprojectbudget from "../add/addprojectbudget.jsx";
import toast from "react-hot-toast";
import EditBudget from "../update/EditBudget.jsx";

const Budget = () => {
  const [budgets, setbudgets] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedbudgets, setSelectedbudgets] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:4000/api/budgets");
      setbudgets(response.data);
    };

    fetchData();
  }, []);

  const deleteBudget = async (budgetId) => {
    await axios
      .delete(`http://localhost:4000/api/budgets/${budgetId}`)
      .then((respones) => {
        setbudgets((prevBudget) =>
          prevBudget.filter((budget) => budget._id !== budgetId)
        );
        toast.success(respones.data.msg, { position: "top-right" });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="AuditHistory">
      <button
        onClick={() => {
          setIsModalOpen(true);
        }}
        className="addButton"
      >
        Add ProjectBudget
      </button>
      {isModalOpen && (
        <Addprojectbudget
          closeModal={() => {
            setIsModalOpen(false);
          }}
        />
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
                  <button onClick={() => deleteBudget(budget._id)}>
                    <i className="fa-solid fa-trash"></i>
                  </button>
                  <button
                    onClick={() => {
                      setIsModalOpen(true);
                      setSelectedbudgets(budget._id);
                    }}
                    className="addButton"
                  >
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                  {isModalOpen && (
                    <EditBudget
                      budgetId={selectedbudgets}
                      closeModal={() => {
                        setIsModalOpen(false);
                      }}
                    />
                  )}
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
