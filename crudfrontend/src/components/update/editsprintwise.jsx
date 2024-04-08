import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const EditSprintModal = ({ sprintId, closeModal }) => {
  const [sprintData, setSprintData] = useState({
    sprint: "",
    startDate: "",
    endDate: "",
    status: "",
    comments: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/sprint/${sprintId}`
        );
        setSprintData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [sprintId]);

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setSprintData({ ...sprintData, [name]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.patch(
        `http://localhost:4000/api/sprint/${sprintId}`,
        sprintData
      );
      toast.success(response.data.msg, { position: "top-right" });
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
          <p className="modal-card-title">Edit SprintWise details</p>
        </header>
        <section className="modal-card-body">
          <form className="editAuditForm" onSubmit={submitHandler}>
            <div className="inputgroup">
              <label htmlFor="sprint">Sprint:</label>
              <input
                type="text"
                id="sprint"
                name="sprint"
                autoComplete="off"
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
                value={sprintData.comments}
                onChange={inputHandler}
              />
            </div>
            <div className="inputgroup">
              <button type="submit">Update Sprint</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default EditSprintModal;
