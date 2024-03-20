import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import "./update.css";

const EditClientFeedback = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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
      .get(
        `http://localhost:4000/api/clientfeedback/getoneclientfeedback/${id}`
      )
      .then((response) => {
        setUpdatedFeedback(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const submitForm = async (event) => {
    event.preventDefault();
    await axios
      .patch(
        `http://localhost:4000/api/clientfeedback/updateclientfeedback/${id}`,
        updatedFeedback
      )
      .then((response) => {
        toast.success(response.data.msg, { position: "top-right" });
        navigate("/clientfeedback");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="editaudit">
      <h3>Edit Client Feedback</h3>
      <Link to="/clientfeedback">Back</Link>
      <form className="editAuditForm" onSubmit={submitForm}>
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
    </div>
  );
};

export default EditClientFeedback;
