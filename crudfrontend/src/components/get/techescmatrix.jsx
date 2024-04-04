import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import AddTechescMatrixModal from "../add/addtechescmatrix";

const TechescMatrix = () => {
  const [techescMatrices, setTechescMatrices] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/techescmatrix/gettechescmatrix"
        );
        setTechescMatrices(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const deleteTechescMatrix = async (techescMatrixId) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/api/techescmatrix/deletetechescmatrix/${techescMatrixId}`
      );
      setTechescMatrices((prevTechescMatrices) =>
        prevTechescMatrices.filter((matrix) => matrix._id !== techescMatrixId)
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
        Add TechescMatrix Entry
      </button>
      {isModalOpen && (
        <AddTechescMatrixModal
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
          {techescMatrices.map((matrix, index) => (
            <tr key={matrix._id}>
              <td>{index + 1}</td>
              <td>{matrix.escalationlevel}</td>
              <td>{matrix.name}</td>
              <td>{matrix.role}</td>
              <td className="actionButton">
                <button onClick={() => deleteTechescMatrix(matrix._id)}>
                  <i className="fa-solid fa-trash"></i>
                </button>
                <br />
                <Link
                  to={`/techescalationmatrix/edittecescmatrix/${matrix._id}`}
                >
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

export default TechescMatrix;
