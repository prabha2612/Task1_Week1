import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "../add/addmodal.css";

const EditClientFeedbackModal = ({ feedbackId, closeModal }) => {
  const [updatedFeedback, setUpdatedFeedback] = useState({
    FeedbackType: "",
    daterecieved: "",
    detailedFeedback: "",
    actionTaken: "",
    closureDate: "",
  });

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setUpdatedFeedback({ ...updatedFeedback, [name]: value });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/clientfeedbacks/${feedbackId}`)
      .then((response) => {
        setUpdatedFeedback(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [feedbackId]);

  const submitForm = async (event) => {
    event.preventDefault();
    await axios
      .patch(
        `http://localhost:4000/api/clientfeedbacks/${feedbackId}`,
        updatedFeedback
      )
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
          <p className="modal-card-title">Edit Client Feedback</p>
        </header>
        <section className="modal-card-body">
          <form onSubmit={submitForm}>
            <div className="inputgroup">
              <label htmlFor="FeedbackType">Feedback Type: </label>
              <input
                type="text"
                id="FeedbackType"
                name="FeedbackType"
                autoComplete="off"
                value={updatedFeedback.FeedbackType}
                placeholder="Enter feedback type"
                onChange={inputChangeHandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="daterecieved">Date Received: </label>
              <input
                type="date"
                id="daterecieved"
                name="daterecieved"
                value={updatedFeedback.daterecieved}
                onChange={inputChangeHandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="detailedFeedback">Detailed Feedback: </label>
              <textarea
                id="detailedFeedback"
                name="detailedFeedback"
                value={updatedFeedback.detailedFeedback}
                onChange={inputChangeHandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="actionTaken">Action Taken: </label>
              <input
                type="text"
                id="actionTaken"
                name="actionTaken"
                autoComplete="off"
                value={updatedFeedback.actionTaken}
                placeholder="Enter action taken"
                onChange={inputChangeHandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="closureDate">Closure Date: </label>
              <input
                type="date"
                id="closureDate"
                name="closureDate"
                value={updatedFeedback.closureDate}
                onChange={inputChangeHandler}
              />
            </div>
            <div className="inputgroup">
              <button type="submit">Update Feedback</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default EditClientFeedbackModal;
