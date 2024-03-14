import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "./addmodal.css";

const AddprojectBudget = ({ closeModal }) => {
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
      closeModal(); // Close the modal after successful submission
    } catch (error) {
      console.log(error);
    }
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
          <p className="modal-card-title">New Budget</p>
        </header>
        <section className="modal-card-body">
          <form onSubmit={submitHandler}>
            <div className="inputgroup">
              <label htmlFor="projecttype">Project Type: </label>
              <input
                type="text"
                id="projecttype"
                name="projecttype"
                autoComplete="off"
                placeholder="project type:"
                onChange={inputhandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="Duration">Duration : </label>
              <input
                type="number"
                id="Duration"
                name="Duration"
                autoComplete="off"
                placeholder="Duration:"
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
                placeholder="Budgeted hours:"
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

export default AddprojectBudget;
