import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "../styling/addmodal.css";

const EditRiskprofiling = ({ riskprofileId, closeModal }) => {
  const [updatedRiskprofiling, setUpdatedRiskprofiling] = useState({
    riskType: "",
    description: "",
    severity: "",
    impact: "",
    remedialsteps: "",
    status: "",
    closuredate: "",
  });

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setUpdatedRiskprofiling({ ...updatedRiskprofiling, [name]: value });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/riskprofiles/${riskprofileId}`)
      .then((response) => {
        setUpdatedRiskprofiling(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [riskprofileId]);

  const submitForm = async (event) => {
    event.preventDefault();
    try {
      await axios.patch(
        `http://localhost:4000/api/riskprofiles/${riskprofileId}`,
        updatedRiskprofiling
      );
      toast.success("Risk profiling updated successfully", {
        position: "top-right",
      });
      closeModal();
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
          <p className="modal-card-title">Edit Resources</p>
        </header>
        <section className="modal-card-body">
          <form className="editAuditForm" onSubmit={submitForm}>
            <div className="inputgroup">
              <label htmlFor="riskType">Risk Type: </label>
              <input
                type="text"
                id="riskType"
                name="riskType"
                autoComplete="off"
                value={updatedRiskprofiling.riskType}
                placeholder="Risk Type"
                onChange={inputChangeHandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="description">Description: </label>
              <input
                type="text"
                id="description"
                name="description"
                autoComplete="off"
                value={updatedRiskprofiling.description}
                placeholder="Description"
                onChange={inputChangeHandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="severity">Severity: </label>
              <input
                type="text"
                id="severity"
                name="severity"
                autoComplete="off"
                value={updatedRiskprofiling.severity}
                placeholder="Severity"
                onChange={inputChangeHandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="impact">Impact: </label>
              <input
                type="text"
                id="impact"
                name="impact"
                autoComplete="off"
                value={updatedRiskprofiling.impact}
                placeholder="Impact"
                onChange={inputChangeHandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="remedialsteps">Remedial Steps: </label>
              <input
                type="text"
                id="remedialsteps"
                name="remedialsteps"
                autoComplete="off"
                value={updatedRiskprofiling.remedialsteps}
                placeholder="Remedial Steps"
                onChange={inputChangeHandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="status">Status: </label>
              <input
                type="text"
                id="status"
                name="status"
                autoComplete="off"
                value={updatedRiskprofiling.status}
                placeholder="Status"
                onChange={inputChangeHandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="closuredate">Closure Date: </label>
              <input
                type="date"
                id="closuredate"
                name="closuredate"
                value={updatedRiskprofiling.closuredate}
                onChange={inputChangeHandler}
              />
            </div>
            <div className="inputgroup">
              <button type="submit">Update Risk Profile</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default EditRiskprofiling;
