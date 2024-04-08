import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "../styling/addmodal.css";

const AddProjectModal = ({ closeModal }) => {
  const [project, setProject] = useState({
    projectName: "",
    // Add more fields as needed
  });

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setProject({ ...project, [name]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/projects",
        project
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
          <p className="modal-card-title">New Project</p>
        </header>
        <section className="modal-card-body">
          <form onSubmit={submitHandler}>
            <div className="inputgroup">
              <label htmlFor="projectName">Project Name: </label>
              <input
                type="text"
                id="projectName"
                name="projectName"
                autoComplete="off"
                placeholder="Project name"
                onChange={inputHandler}
              />
            </div>
            {/* Add more input fields for other project properties */}
            <div className="inputgroup">
              <button type="submit">Add Project</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AddProjectModal;
