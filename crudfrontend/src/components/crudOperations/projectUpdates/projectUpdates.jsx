import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import AddProjectUpdatesModal from "./addProjectUpdates";
import EditProjectUpdate from "./editProjectUpdates";

const ProjectUpdates = () => {
  const [projectUpdates, setProjectUpdates] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProjectupdates, setSelectedProjectUpdates] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/projectupdates"
        );
        setProjectUpdates(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const deleteUpdate = async (updateId) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/api/projectupdates/deleteprojectupdate/${updateId}`
      );
      setProjectUpdates((prevUpdates) =>
        prevUpdates.filter((update) => update._id !== updateId)
      );
      toast.success(response.data.msg, { position: "top-right" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="AuditHistory">
      <button
        onClick={() => {
          setIsModalOpen(true);
        }}
        className="addButton"
      >
        Add Project Update
      </button>
      {isModalOpen && (
        <AddProjectUpdatesModal
          closeModal={() => {
            setIsModalOpen(false);
          }}
        />
      )}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>General Updates</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {projectUpdates.map((update, index) => (
            <tr key={update._id}>
              <td>{index + 1}</td>
              <td>{update.Date}</td>
              <td>{update.generalUpdates}</td>
              <td className="actionButton">
                <button onClick={() => deleteUpdate(update._id)}>
                  {" "}
                  <i className="fa-solid fa-trash"></i>
                </button>
                <button
                  onClick={() => {
                    setIsModalOpen(true);
                    setSelectedProjectUpdates(update._id);
                  }}
                  className="addButton"
                >
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
                {isModalOpen && (
                  <EditProjectUpdate
                    projectUpdatesId={selectedProjectupdates}
                    closeModal={() => {
                      setIsModalOpen(false);
                    }}
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

export default ProjectUpdates;
