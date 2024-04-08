import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "./addmodal.css";

const AddRiskprofiling = ({ closeModal }) => {
  const [riskprofiling, setRiskprofiling] = useState({
    riskType: "",
    description: "",
    severity: "",
    impact: "",
    remedialsteps: "",
    status: "",
    closuredate: "",
  });

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setRiskprofiling({ ...riskprofiling, [name]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/riskprofiles",
        riskprofiling
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
          <p className="modal-card-title">New Riskprofiling Entry</p>
        </header>
        <section className="modal-card-body">
          <form onSubmit={submitHandler}>
            <div className="inputgroup">
              <label htmlFor="riskType">Risk Type: </label>
              <input
                type="text"
                id="riskType"
                name="riskType"
                autoComplete="off"
                placeholder="Risk Type:"
                onChange={inputHandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="description">Description: </label>
              <input
                type="text"
                id="description"
                name="description"
                autoComplete="off"
                placeholder="Description:"
                onChange={inputHandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="severity">Severity: </label>
              <input
                type="text"
                id="severity"
                name="severity"
                autoComplete="off"
                placeholder="Severity:"
                onChange={inputHandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="impact">Impact: </label>
              <input
                type="text"
                id="impact"
                name="impact"
                autoComplete="off"
                placeholder="Impact:"
                onChange={inputHandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="remedialsteps">Remedial Steps: </label>
              <input
                type="text"
                id="remedialsteps"
                name="remedialsteps"
                autoComplete="off"
                placeholder="Remedial Steps:"
                onChange={inputHandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="status">Status: </label>
              <input
                type="text"
                id="status"
                name="status"
                autoComplete="off"
                placeholder="Status:"
                onChange={inputHandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="closuredate">Closure Date: </label>
              <input
                type="date"
                id="closuredate"
                name="closuredate"
                autoComplete="off"
                onChange={inputHandler}
              />
            </div>
            <div className="inputgroup">
              <button type="submit">Add Riskprofile</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AddRiskprofiling;
