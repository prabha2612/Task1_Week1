import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const EditResourceModal = ({ resourcesId, closeModal }) => {
  const [resourceData, setResourceData] = useState({
    resourceName: "",
    Role: "",
    startDate: "",
    endDate: "",
    comment: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/resources/${resourcesId}`
        );
        setResourceData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [resourcesId]);

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setResourceData({ ...resourceData, [name]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.patch(
        `http://localhost:4000/api/resources/${resourcesId}`,
        resourceData
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
          <p className="modal-card-title">Edit Resources</p>
        </header>
        <section className="modal-card-body">
          <form className="editResourceForm" onSubmit={submitHandler}>
            <div className="inputgroup">
              <label htmlFor="resourceName">Resource Name:</label>
              <input
                type="text"
                id="resourceName"
                name="resourceName"
                autoComplete="off"
                value={resourceData.resourceName}
                onChange={inputHandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="Role">Role:</label>
              <input
                type="text"
                id="Role"
                name="Role"
                autoComplete="off"
                value={resourceData.Role}
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
              <label htmlFor="comment">Comment:</label>
              <input
                type="text"
                id="comment"
                name="comment"
                autoComplete="off"
                value={resourceData.comment}
                onChange={inputHandler}
              />
            </div>
            <div className="inputgroup">
              <button type="submit">Update Resource</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default EditResourceModal;
