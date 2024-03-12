// AddAuditModal.jsx
import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "./addmodal.css";

const Addprojectbudget = ({ isOpen, onClose }) => {
  const [budget, setBudget] = useState({
    projecttype: "",
    Duration: "",
    budgetedhours: "",
  });

  const inputhandler = (event) => {
    const { name, value } = event.target;
    setBudget({ ...budget, [name]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/budget/createbudget",
        budget
      );
      toast.success(response.data.msg, { position: "top-right" });
      onClose(); // Close the modal after successful submission
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={`modal ${isOpen ? "is-active" : ""}`}>
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">New Audit</p>
          <button
            className="delete"
            onClick={onClose}
            aria-label="close"
          ></button>
        </header>
        <section className="modal-card-body">
          <form onSubmit={submitHandler}>
            <div className="inputgroup">
              <label htmlFor="auditDate">Project Type: </label>
              <input
                type="text"
                id="projecttype"
                name="projecttype"
                autoComplete="off"
                placeholder="Project type:"
                onChange={inputhandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="Duration">Duration: </label>
              <input
                type="number"
                id="Duration"
                name="Duration"
                autoComplete="off"
                placeholder="Duration"
                onChange={inputhandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="budgetedhours">Budgeted Hours: </label>
              <input
                type="number"
                id="budgetedhours"
                name="budgetedhours"
                autoComplete="off"
                placeholder="Budgeted Hours:"
                onChange={inputhandler}
              />
            </div>
            <div className="inputgroup">
              <button type="submit">Add Budget</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Addprojectbudget;
