import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddProjectModal from "../add/addProjects";
import toast from "react-hot-toast";
import "./audit.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/projects/getproject");
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchData();
  }, []);

  const deleteProject = async (projectId) => {
    try {
      const response = await axios.delete(`http://localhost:4000/api/projects/deleteproject/${projectId}`);
      setProjects((prevProjects) => prevProjects.filter((project) => project._id !== projectId));
      toast.success(response.data.msg, { position: "top-right" });
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  return (
    <div className="AuditHistory">
      <button onClick={() => setIsModalOpen(true)}>Add Project</button>
      {isModalOpen && (
        <AddProjectModal closeModal={() => setIsModalOpen(false)} />
      )}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Project Name</th>
            {/* Add more table headings as needed */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project._id}>
              <td>{project._id}</td>
              <td>{project.projectName}</td>
              {/* Add more table cells for other project properties */}
              <td>
                <button onClick={() => deleteProject(project._id)}>Delete</button>
                <Link to={`/projects/${project._id}/edit`}>Edit</Link>
                {/* Add more actions as needed */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Projects;
