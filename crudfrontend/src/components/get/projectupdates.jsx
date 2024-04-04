import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import AddProjectUpdatesModal from "../add/addprojectupdates";

const ProjectUpdates = () => {
  const [projectUpdates, setProjectUpdates] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/projectupdates/getprojectupdates"
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
                <button onClick={() => deleteUpdate(update._id)}>Delete</button>
                <Link to={`/projectupdates/editupdates/${update._id}`}>
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectUpdates;
