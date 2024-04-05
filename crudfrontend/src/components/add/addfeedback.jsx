import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "./addmodal.css";

const AddClientFeedbackModal = ({ closeModal }) => {
  const [feedback, setFeedback] = useState({
    FeedbackType: "",
    daterecieved: "",
    detailedFeedback: "",
    actionTaken: "",
    closureDate: "",
  });

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setFeedback({ ...feedback, [name]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/clientfeedbacks",
        feedback
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
          <p className="modal-card-title">New Client Feedback</p>
        </header>
        <section className="modal-card-body">
          <form onSubmit={submitHandler}>
            <div className="inputgroup">
              <label htmlFor="FeedbackType">Feedback Type: </label>
              <input
                type="text"
                id="FeedbackType"
                name="FeedbackType"
                autoComplete="off"
                placeholder="Feedback type:"
                onChange={inputHandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="daterecieved">Date Received: </label>
              <input
                type="date"
                id="daterecieved"
                name="daterecieved"
                onChange={inputHandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="detailedFeedback">Detailed Feedback: </label>
              <textarea
                id="detailedFeedback"
                name="detailedFeedback"
                onChange={inputHandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="actionTaken">Action Taken: </label>
              <input
                type="text"
                id="actionTaken"
                name="actionTaken"
                autoComplete="off"
                placeholder="Action taken:"
                onChange={inputHandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="closureDate">Closure Date: </label>
              <input
                type="date"
                id="closureDate"
                name="closureDate"
                onChange={inputHandler}
              />
            </div>
            <div className="inputgroup">
              <button type="submit">Add Feedback</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AddClientFeedbackModal;
