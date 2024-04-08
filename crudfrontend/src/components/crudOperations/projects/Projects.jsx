import React, { useEffect, useState } from "react";
import axios from "axios";
import AddProjectModal from "./addProjects";
import toast from "react-hot-toast";
import "../styling/audit.css";
import EditProject from "./editProjects";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/projects");
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchData();
  }, []);

  const deleteProject = async (projectId) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/api/projects/${projectId}`
      );
      setProjects((prevProjects) =>
        prevProjects.filter((project) => project._id !== projectId)
      );
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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project._id}>
              <td>{project._id}</td>
              <td>{project.projectName}</td>
              <td>
                <button onClick={() => deleteProject(project._id)}>
                  Delete
                </button>
                <button
                  onClick={() => {
                    setSelectedProject(project._id);
                    setIsModalOpen(true);
                  }}
                >
                  Edit
                </button>
                {isModalOpen && (
                  <EditProject
                    projectId={selectedProject}
                    closeModal={() => setIsModalOpen(false)}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Projects;
