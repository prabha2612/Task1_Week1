import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "./addmodal.css";

const AddTechstackModal = ({ closeModal }) => {
  const [techstack, setTechstack] = useState({
    backend: "",
    frontend: "",
    mobileapp: "",
    database: "",
    infrastructure: "",
  });

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setTechstack({ ...techstack, [name]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/techstack/createtechstack",
        techstack
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
          <p className="modal-card-title">New Techstack</p>
        </header>
        <section className="modal-card-body">
          <form onSubmit={submitHandler}>
            <div className="inputgroup">
              <label htmlFor="backend">Backend: </label>
              <input
                type="text"
                id="backend"
                name="backend"
                autoComplete="off"
                placeholder="Backend"
                onChange={inputHandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="frontend">Frontend: </label>
              <input
                type="text"
                id="frontend"
                name="frontend"
                autoComplete="off"
                placeholder="Frontend"
                onChange={inputHandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="mobileapp">Mobile App: </label>
              <input
                type="text"
                id="mobileapp"
                name="mobileapp"
                autoComplete="off"
                placeholder="Mobile App"
                onChange={inputHandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="database">Database: </label>
              <input
                type="text"
                id="database"
                name="database"
                autoComplete="off"
                placeholder="Database"
                onChange={inputHandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="infrastructure">Infrastructure: </label>
              <input
                type="text"
                id="infrastructure"
                name="infrastructure"
                autoComplete="off"
                placeholder="Infrastructure"
                onChange={inputHandler}
              />
            </div>
            <div className="inputgroup">
              <button type="submit">Add Techstack</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AddTechstackModal;
