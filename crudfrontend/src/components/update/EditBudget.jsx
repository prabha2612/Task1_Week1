import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "./update.css";

const EditBudget = ({ budgetId, closeModal }) => {
  const [updatedbudget, setUpdatedbudget] = useState({
    projecttype: "",
    Duration: "",
    budgetedhours: "",
  });

  const inputchangehandler = (event) => {
    const { name, value } = event.target;
    setUpdatedbudget({ ...updatedbudget, [name]: value });
    console.log(updatedbudget);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/budgets/${budgetId}`)
      .then((response) => {
        setUpdatedbudget(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [budgetId]);

  const submitform = async (event) => {
    event.preventDefault();
    await axios
      .patch(`http://localhost:4000/api/budgets/${budgetId}`, updatedbudget)
      .then((response) => {
        toast.success(response.data.msg, { position: "top-right" });
        closeModal();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
    >
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Edit Project Budget</p>
        </header>
        <section className="modal-card-body">
          <form onSubmit={submitform}>
            <div className="inputgroup">
              <label htmlFor="projecttype">Project Type: </label>
              <input
                type="text"
                id="projecttype"
                name="projecttype"
                autoComplete="off"
                value={updatedbudget.projecttype}
                placeholder="monthly/fixed"
                onChange={inputchangehandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="Duration">Duration: </label>
              <input
                type="number"
                id="Duration"
                name="Duration"
                autoComplete="off"
                value={updatedbudget.Duration}
                placeholder="Duration:"
                onChange={inputchangehandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="budgetedhours">Budgeted Hours: </label>
              <input
                type="text"
                id="budgetedhours"
                name="budgetedhours"
                autoComplete="off"
                value={updatedbudget.budgetedhours}
                placeholder="Budgeted hours :"
                onChange={inputchangehandler}
              />
            </div>
            <div className="inputgroup">
              <button type="submit">Update Budget</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default EditBudget;
