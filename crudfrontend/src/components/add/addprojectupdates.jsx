import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "./addmodal.css";

const AddProjectUpdatesModal = ({ closeModal }) => {
  const [projectUpdates, setProjectUpdates] = useState({
    Date: "",
    generalUpdates: "",
  });

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setProjectUpdates({ ...projectUpdates, [name]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/projectupdates",
        projectUpdates
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
          <p className="modal-card-title">New Project Update</p>
        </header>
        <section className="modal-card-body">
          <form onSubmit={submitHandler}>
            <div className="inputgroup">
              <label htmlFor="Date">Date: </label>
              <input
                type="date"
                id="Date"
                name="Date"
                autoComplete="off"
                onChange={inputHandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="generalUpdates">General Updates: </label>
              <textarea
                id="generalUpdates"
                name="generalUpdates"
                onChange={inputHandler}
              />
            </div>
            <div className="inputgroup">
              <button type="submit">Add Project Update</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AddProjectUpdatesModal;
