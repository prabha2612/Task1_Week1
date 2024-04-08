import React, { useEffect, useState } from "react";
import axios from "axios";
import AddSprintModal from "../add/addsprintwise";
import EditSprintModal from "../update/editsprintwise";

const SprintWise = () => {
  const [sprints, setSprints] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSprint, setSelectedSprint] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/sprint");
        setSprints(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

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
              <td>{sprint.startDate}</td>
              <td>{sprint.endDate}</td>
              <td>{sprint.status}</td>
              <td>{sprint.comments}</td>
              <td className="actionButton">
                <button
                  onClick={() => {
                    setSelectedSprint(sprint._id);
                    setIsModalOpen(true);
                  }}
                  className="addButton"
                >
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
                {isModalOpen && (
                  <EditSprintModal
                    sprintId={selectedSprint}
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

export default SprintWise;
