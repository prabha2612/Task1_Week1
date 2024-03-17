import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import AddSprintModal from "../add/AddSprintModal";

const SprintWise = () => {
  const [sprints, setSprints] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/sprintwise/getsprint");
        setSprints(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const deleteSprint = async (sprintId) => {
    try {
      const response = await axios.delete(`http://localhost:4000/api/sprintwise/deletesprint/${sprintId}`);
      setSprints((prevSprints) => prevSprints.filter((sprint) => sprint._id !== sprintId));
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
        Add Sprint
      </button>
      {isModalOpen && (
        <AddSprintModal
          closeModal={() => {
            setIsModalOpen(false);
          }}
        />
      )}
      <table border={0} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Sprint</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
            <th>Comments</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {sprints.map((sprint, index) => (
            <tr key={sprint._id}>
              <td>{index + 1}</td>
              <td>{sprint.sprint}</td>
              <td>{new Date(sprint.startDate).toLocaleDateString()}</td>
              <td>{new Date(sprint.endDate).toLocaleDateString()}</td>
              <td>{sprint.status}</td>
              <td>{sprint.comments}</td>
              <td className="actionButton">
                <button onClick={() => deleteSprint(sprint._id)}>
                  <i className="fa-solid fa-trash"></i>
                </button>
                <Link to={`/sprintwise/editsprint/${sprint._id}`}>
                  <i className="fa-solid fa-pen-to-square"></i>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SprintWise;
