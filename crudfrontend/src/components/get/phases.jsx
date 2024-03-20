import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import AddPhaseModal from "../add/addphases";

const Phases = () => {
  const [phases, setPhases] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/phase/getphase"
        );
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
        `http://localhost:4000/api/phase/deletephase/${phaseId}`
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
              <td>{new Date(phase.startDate).toLocaleDateString()}</td>
              <td>{new Date(phase.completionDate).toLocaleDateString()}</td>
              <td>{new Date(phase.approvalDate).toLocaleDateString()}</td>
              <td>{phase.status}</td>
              <td>
                {new Date(phase.revisedCompletionDate).toLocaleDateString()}
              </td>
              <td>{phase.comments}</td>
              <td className="actionButton">
                <button onClick={() => deletePhase(phase._id)}>
                  <i className="fa-solid fa-trash"></i>
                </button>
                <Link to={`/phases/editphases/${phase._id}`}>
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

export default Phases;
