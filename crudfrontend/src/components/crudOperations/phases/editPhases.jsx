import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "../styling/addmodal.css";

const EditPhase = ({ phaseId, closeModal }) => {
  const [updatedPhase, setUpdatedPhase] = useState({
    title: "",
    startDate: "",
    completionDate: "",
    approvalDate: "",
    status: "",
    revisedCompletionDate: "",
    comments: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/phases/${phaseId}`)
      .then((response) => {
        setUpdatedPhase(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [phaseId]);

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setUpdatedPhase({ ...updatedPhase, [name]: value });
  };

  const submitForm = async (event) => {
    event.preventDefault();
    try {
      await axios.patch(
        `http://localhost:4000/api/phases/${phaseId}`,
        updatedPhase
      );
      toast.success("Phase updated successfully", { position: "top-right" });
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
          <p className="modal-card-title">Edit Phases</p>
        </header>
        <section className="modal-card-body">
          <form className="editAuditForm" onSubmit={submitForm}>
            <div className="inputgroup">
              <label htmlFor="title">Title: </label>
              <input
                type="text"
                id="title"
                name="title"
                autoComplete="off"
                value={updatedPhase.title}
                onChange={inputChangeHandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="startDate">Start Date: </label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                autoComplete="off"
                value={updatedPhase.startDate}
                onChange={inputChangeHandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="completionDate">Completion Date: </label>
              <input
                type="date"
                id="completionDate"
                name="completionDate"
                autoComplete="off"
                value={updatedPhase.completionDate}
                onChange={inputChangeHandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="approvalDate">Approval Date: </label>
              <input
                type="date"
                id="approvalDate"
                name="approvalDate"
                autoComplete="off"
                value={updatedPhase.approvalDate}
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
                value={updatedPhase.status}
                onChange={inputChangeHandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="revisedCompletionDate">
                Revised Completion Date:{" "}
              </label>
              <input
                type="date"
                id="revisedCompletionDate"
                name="revisedCompletionDate"
                autoComplete="off"
                value={updatedPhase.revisedCompletionDate}
                onChange={inputChangeHandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="comments">Comments: </label>
              <textarea
                id="comments"
                name="comments"
                autoComplete="off"
                value={updatedPhase.comments}
                onChange={inputChangeHandler}
              />
            </div>
            <div className="inputgroup">
              <button type="submit">Update Phase</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default EditPhase;
