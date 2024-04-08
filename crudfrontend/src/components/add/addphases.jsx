import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "./addmodal.css";

const AddPhaseModal = ({ closeModal }) => {
  const [phase, setPhase] = useState({
    title: "",
    startDate: "",
    completionDate: "",
    approvalDate: "",
    status: "",
    revisedCompletionDate: "",
    comments: "",
  });

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setPhase({ ...phase, [name]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/phases",
        phase
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
          <p className="modal-card-title">New Phase Entry</p>
        </header>
        <section className="modal-card-body">
          <form onSubmit={submitHandler}>
            <div className="inputgroup">
              <label htmlFor="title">Title: </label>
              <input
                type="text"
                id="title"
                name="title"
                autoComplete="off"
                placeholder="Title:"
                onChange={inputHandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="startDate">Start Date: </label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                autoComplete="off"
                onChange={inputHandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="completionDate">Completion Date: </label>
              <input
                type="date"
                id="completionDate"
                name="completionDate"
                autoComplete="off"
                onChange={inputHandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="approvalDate">Approval Date: </label>
              <input
                type="date"
                id="approvalDate"
                name="approvalDate"
                autoComplete="off"
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
              <label htmlFor="revisedCompletionDate">
                Revised Completion Date:
              </label>
              <input
                type="date"
                id="revisedCompletionDate"
                name="revisedCompletionDate"
                autoComplete="off"
                onChange={inputHandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="comments">Comments: </label>
              <textarea
                id="comments"
                name="comments"
                autoComplete="off"
                placeholder="Comments:"
                onChange={inputHandler}
              />
            </div>
            <div className="inputgroup">
              <button type="submit">Add Phase</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AddPhaseModal;
