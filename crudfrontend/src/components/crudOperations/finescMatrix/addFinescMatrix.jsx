import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "../styling/addmodal.css";

const AddFinescMatrixModal = ({ closeModal, timelineId }) => {
  const [finescMatrix, setFinescMatrix] = useState({
    escalationlevel: "",
    name: "",
    role: "",
  });

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setFinescMatrix({ ...finescMatrix, [name]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/finescmatrix/createfinescmatrix",
        finescMatrix
      );
      toast.success(response.data.msg, { position: "top-right" });
      closeModal(); // Close the modal after successful submission
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
          <p className="modal-card-title">New Finesc Matrix Entry</p>
        </header>
        <section className="modal-card-body">
          <form onSubmit={submitHandler}>
            <div className="inputgroup">
              <label htmlFor="escalationlevel">Escalation Level: </label>
              <input
                type="text"
                id="escalationlevel"
                name="escalationlevel"
                autoComplete="off"
                placeholder="Escalation Level:"
                onChange={inputHandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="name">Name : </label>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="off"
                placeholder="Name:"
                onChange={inputHandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="role">Role: </label>
              <input
                type="text"
                id="role"
                name="role"
                autoComplete="off"
                placeholder="Role:"
                onChange={inputHandler}
              />
            </div>
            <div className="inputgroup">
              <button type="submit">Add Finesc Matrix Entry</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AddFinescMatrixModal;
