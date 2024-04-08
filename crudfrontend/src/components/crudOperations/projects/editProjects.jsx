import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "../styling/addmodal.css";

const EditProject = ({ projectId, closeModal }) => {
  const [updatedProject, setUpdatedProject] = useState({
    projectName: "",
  });

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setUpdatedProject({ ...updatedProject, [name]: value });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/projects/${projectId}`)
      .then((response) => {
        setUpdatedProject(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [projectId]);

  const submitForm = async (event) => {
    event.preventDefault();
    await axios
      .patch(`http://localhost:4000/api/projects/${projectId}`, updatedProject)
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
          <p className="modal-card-title">Edit Project</p>
        </header>
        <section className="modal-card-body">
          <form className="editAuditForm" onSubmit={submitForm}>
            <div className="inputgroup">
              <label htmlFor="projectName">Project Name: </label>
              <input
                type="text"
                id="projectName"
                name="projectName"
                autoComplete="off"
                value={updatedProject.projectName}
                placeholder="Project name"
                onChange={inputChangeHandler}
              />
            </div>
            {/* Add more input fields for other project properties */}
            <div className="inputgroup">
              <button type="submit">Update Project</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default EditProject;
