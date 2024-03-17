import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import "./update.css";

const EditProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [updatedProject, setUpdatedProject] = useState({
    projectName: "",
    // Add more fields as needed
  });

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setUpdatedProject({ ...updatedProject, [name]: value });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/projects/getOneProject/${id}`)
      .then((response) => {
        setUpdatedProject(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const submitForm = async (event) => {
    event.preventDefault();
    await axios
      .patch(
        `http://localhost:4000/api/projects/updateProject/${id}`,
        updatedProject
      )
      .then((response) => {
        toast.success(response.data.msg, { position: "top-right" });
        navigate("/projects");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="editaudit">
      <h3>Edit Project</h3>
      <Link to="/projects">Back</Link>
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
    </div>
  );
};

export default EditProject;
