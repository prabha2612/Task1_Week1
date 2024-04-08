import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import AddFinescMatrixModal from "./addFinescMatrix";
import EditFinescMatrixModal from "./editFinescMatrix";

const FinescMatrix = () => {
  const [finescMatrices, setFinescMatrices] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedfinescMatrices, setSelectedfinescMatrices] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/finescmatrices"
        );
        setFinescMatrices(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const deleteFinescMatrix = async (finescMatrixId) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/api/finescmatrices/${finescMatrixId}`
      );
      setFinescMatrices((prevFinescMatrices) =>
        prevFinescMatrices.filter((matrix) => matrix._id !== finescMatrixId)
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
        Add FinescMatrix Entry
      </button>
      {isModalOpen && (
        <AddFinescMatrixModal
          closeModal={() => {
            setIsModalOpen(false);
          }}
        />
      )}
      <table border={0} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Escalation Level</th>
            <th>Name</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {finescMatrices.map((matrix, index) => (
            <tr key={matrix._id}>
              <td>{index + 1}</td>
              <td>{matrix.escalationlevel}</td>
              <td>{matrix.name}</td>
              <td>{matrix.role}</td>
              <td className="actionButton">
                <button onClick={() => deleteFinescMatrix(matrix._id)}>
                  <i className="fa-solid fa-trash"></i>
                </button>
                <button
                  onClick={() => {
                    setIsModalOpen(true);
                    setSelectedfinescMatrices(matrix._id);
                  }}
                  className="addButton"
                >
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
                {isModalOpen && (
                  <EditFinescMatrixModal
                    finescId={selectedfinescMatrices}
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

export default FinescMatrix;
