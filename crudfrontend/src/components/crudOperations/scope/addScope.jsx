import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "../styling/addmodal.css";

const AddScopeModal = ({ closeModal }) => {
  const [scope, setScope] = useState({
    projectScope: "",
  });

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setScope({ ...scope, [name]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/scope",
        scope
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
          <p className="modal-card-title">New Scope</p>
        </header>
        <section className="modal-card-body">
          <form onSubmit={submitHandler}>
            <div className="inputgroup">
              <label htmlFor="projectScope">Project Scope: </label>
              <textarea
                id="projectScope"
                name="projectScope"
                autoComplete="off"
                placeholder="Project Scope:"
                onChange={inputHandler}
              ></textarea>
            </div>
            <div className="inputgroup">
              <button type="submit">Add Scope</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AddScopeModal;
