import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "../styling/addmodal.css";


const AddSprintModal = ({ closeModal }) => {
  const [sprintData, setSprintData] = useState({
    sprint: "",
    startDate: "",
    endDate: "",
    status: "",
    comments: "",
  });

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setSprintData({ ...sprintData, [name]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/sprint",
        sprintData
      );
      toast.success(response.data.msg, { position: "top-right" });
      closeModal(); // Close the modal after successful submission
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="modal-container">
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Add Sprint</p>
        </header>
        <section className="modal-card-body">
          <form onSubmit={submitHandler}>
            <div className="inputgroup">
              <label htmlFor="sprint">Sprint:</label>
              <input
                type="text"
                id="sprint"
                name="sprint"
                autoComplete="off"
                placeholder="Enter sprint"
                value={sprintData.sprint}
                onChange={inputHandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="startDate">Start Date:</label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                value={sprintData.startDate}
                onChange={inputHandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="endDate">End Date:</label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                value={sprintData.endDate}
                onChange={inputHandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="status">Status:</label>
              <input
                type="text"
                id="status"
                name="status"
                autoComplete="off"
                placeholder="Enter status"
                value={sprintData.status}
                onChange={inputHandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="comments">Comments:</label>
              <input
                type="text"
                id="comments"
                name="comments"
                autoComplete="off"
                placeholder="Enter comments"
                value={sprintData.comments}
                onChange={inputHandler}
              />
            </div>
            <div className="inputgroup">
              <button type="submit">Add Sprint</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AddSprintModal;
