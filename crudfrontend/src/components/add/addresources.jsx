import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const AddResourcesModal = ({ closeModal }) => {
  const [resourceData, setResourceData] = useState({
    resourceName: "",
    role: "",
    startDate: "",
    endDate: "",
    comment: "",
  });

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setResourceData({ ...resourceData, [name]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/resources",
        resourceData
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
          <p className="modal-card-title">Add Resource</p>
        </header>
        <section className="modal-card-body">
          <form onSubmit={submitHandler}>
            <div className="inputgroup">
              <label htmlFor="resourceName">Resource Name:</label>
              <input
                type="text"
                id="resourceName"
                name="resourceName"
                autoComplete="off"
                placeholder="Enter resource name"
                value={resourceData.resourceName}
                onChange={inputHandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="role">Role:</label>
              <input
                type="text"
                id="role"
                name="role"
                autoComplete="off"
                placeholder="Enter role"
                value={resourceData.role}
                onChange={inputHandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="startDate">Start Date:</label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                value={resourceData.startDate}
                onChange={inputHandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="endDate">End Date:</label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                value={resourceData.endDate}
                onChange={inputHandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="comment">Comments:</label>
              <input
                type="text"
                id="comment"
                name="comment"
                autoComplete="off"
                placeholder="Enter comments"
                value={resourceData.comment}
                onChange={inputHandler}
              />
            </div>
            <div className="inputgroup">
              <button type="submit">Add Resource</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AddResourcesModal;
