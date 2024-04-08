import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "./addmodal.css";

const AddStakeholderModal = ({ closeModal }) => {
  const [stakeholder, setStakeholder] = useState({
    title: "",
    name: "",
    contact: "",
  });

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setStakeholder({ ...stakeholder, [name]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/stakeholders",
        stakeholder
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
          <p className="modal-card-title">New Stakeholder</p>
        </header>
        <section className="modal-card-body">
          <form onSubmit={submitHandler}>
            <div className="inputgroup">
              <label htmlFor="title">Title: </label>
              <input
                type="text"
                id="title"
                name="title"
                autoComplete="off"
                placeholder="Title:"
                onChange={inputHandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="name">Name: </label>
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
              <label htmlFor="contact">Contact: </label>
              <input
                type="text"
                id="contact"
                name="contact"
                autoComplete="off"
                placeholder="Contact:"
                onChange={inputHandler}
              />
            </div>
            <div className="inputgroup">
              <button type="submit">Add Stakeholder</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AddStakeholderModal;
