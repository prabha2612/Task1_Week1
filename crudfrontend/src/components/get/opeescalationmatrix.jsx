import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import AddOpescMatrixModal from "../add/addopescmatrix";
import EditOpescMatrix from "../update/editopescmatrix";

const OpescMatrix = () => {
  const [opescMatrices, setOpescMatrices] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedopescMatrices, setSelectedopescMatrices] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/opescmatrices"
        );
        setOpescMatrices(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const deleteOpescMatrix = async (opescMatrixId) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/api/opescmatrices//${opescMatrixId}`
      );
      setOpescMatrices((prevOpescMatrices) =>
        prevOpescMatrices.filter((matrix) => matrix._id !== opescMatrixId)
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
        Add OpescMatrix Entry
      </button>
      {isModalOpen && (
        <AddOpescMatrixModal
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
          {opescMatrices.map((matrix, index) => (
            <tr key={matrix._id}>
              <td>{index + 1}</td>
              <td>{matrix.escalationlevel}</td>
              <td>{matrix.name}</td>
              <td>{matrix.role}</td>
              <td className="actionButton">
                <button onClick={() => deleteOpescMatrix(matrix._id)}>
                  <i className="fa-solid fa-trash"></i>
                </button>
                <button
                  onClick={() => {
                    setIsModalOpen(true);
                    setSelectedopescMatrices(matrix._id);
                  }}
                  className="addButton"
                >
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
                {isModalOpen && (
                  <EditOpescMatrix
                    opescId={selectedopescMatrices}
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

export default OpescMatrix;
