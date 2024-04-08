import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "./update.css";

const EditTechescMatrix = ({ matrixId, closeModal }) => {
  const [updatedMatrix, setUpdatedMatrix] = useState({
    escalationlevel: "",
    name: "",
    role: "",
  });

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setUpdatedMatrix({ ...updatedMatrix, [name]: value });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/techescmatrices/${matrixId}`)
      .then((response) => {
        setUpdatedMatrix(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [matrixId]);

  const submitForm = async (event) => {
    event.preventDefault();
    try {
      await axios.patch(
        `http://localhost:4000/api/techescmatrices/${matrixId}`,
        updatedMatrix
      );
      toast.success("Techesc Matrix updated successfully", {
        position: "top-right",
      });
      closeModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
    >
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Edit Tech escalation Matrix</p>
        </header>
        <section className="modal-card-body">
          <form className="editAuditForm" onSubmit={submitForm}>
            <div className="inputgroup">
              <label htmlFor="escalationlevel">Escalation Level: </label>
              <input
                type="text"
                id="escalationlevel"
                name="escalationlevel"
                autoComplete="off"
                value={updatedMatrix.escalationlevel}
                placeholder="Escalation Level"
                onChange={inputChangeHandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="off"
                value={updatedMatrix.name}
                placeholder="Name"
                onChange={inputChangeHandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="role">Role: </label>
              <input
                type="text"
                id="role"
                name="role"
                autoComplete="off"
                value={updatedMatrix.role}
                placeholder="Role"
                onChange={inputChangeHandler}
              />
            </div>
            <div className="inputgroup">
              <button type="submit">Update Techesc Matrix</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default EditTechescMatrix;
