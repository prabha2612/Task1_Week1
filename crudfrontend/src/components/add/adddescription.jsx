import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "./addmodal.css";

const AddDescriptionmodal = ({ closeModal }) => {
  const [description, setDescription] = useState({
    projectDescription: "",
  });

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setDescription({ ...description, [name]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/descriptions",
        description
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
          <p className="modal-card-title">New Description</p>
        </header>
        <section className="modal-card-body">
          <form onSubmit={submitHandler}>
            <div className="inputgroup">
              <label htmlFor="projectDescription">Project Description: </label>
              <textarea
                id="projectDescription"
                name="projectDescription"
                autoComplete="off"
                placeholder="Project Description:"
                onChange={inputHandler}
              ></textarea>
            </div>
            <div className="inputgroup">
              <button type="submit">Add Description</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AddDescriptionmodal;
