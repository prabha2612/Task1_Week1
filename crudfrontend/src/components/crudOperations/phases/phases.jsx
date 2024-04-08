import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import AddPhaseModal from "./addPhases.jsx";
import EditPhase from "./editPhases.jsx";

const Phases = () => {
  const [phases, setPhases] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhase, setSelectedPhase] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/phases");
        setPhases(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const deletePhase = async (phaseId) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/api/phases/${phaseId}`
      );
      setPhases((prevPhases) =>
        prevPhases.filter((phase) => phase._id !== phaseId)
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
        Add Phase
      </button>
      {isModalOpen && (
        <AddPhaseModal
          closeModal={() => {
            setIsModalOpen(false);
          }}
        />
      )}
      <table border={0} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Start Date</th>
            <th>Completion Date</th>
            <th>Approval Date</th>
            <th>Status</th>
            <th>Revised Completion Date</th>
            <th>Comments</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {phases.map((phase, index) => (
            <tr key={phase._id}>
              <td>{index + 1}</td>
              <td>{phase.title}</td>
              <td>{phase.startDate}</td>
              <td>{phase.completionDate}</td>
              <td>{phase.approvalDate}</td>
              <td>{phase.status}</td>
              <td>{phase.revisedCompletionDate}</td>
              <td>{phase.comments}</td>
              <td className="actionButton">
                <button onClick={() => deletePhase(phase._id)}>
                  <i className="fa-solid fa-trash"></i>
                </button>
                <button
                  onClick={() => {
                    setSelectedPhase(phase._id);
                    setIsModalOpen(true);
                  }}
                  className="addButton"
                >
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
                {isModalOpen && (
                  <EditPhase
                    phaseId={selectedPhase}
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

export default Phases;
