import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "./update.css";

const EditStakeholder = ({ sprintwiseId, closeModal }) => {
  const [updatedStakeholder, setUpdatedStakeholder] = useState({
    title: "",
    name: "",
    contact: "",
  });

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setUpdatedStakeholder({ ...updatedStakeholder, [name]: value });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/stakeholders/${sprintwiseId}`)
      .then((response) => {
        setUpdatedStakeholder(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [sprintwiseId]);

  const submitForm = async (event) => {
    event.preventDefault();
    try {
      await axios.patch(
        `http://localhost:4000/api/stakeholders/${sprintwiseId}`,
        updatedStakeholder
      );
      toast.success("Stakeholder updated successfully", {
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
          <p className="modal-card-title">Edit Stakeholders</p>
        </header>
        <section className="modal-card-body">
          <form className="editAuditForm" onSubmit={submitForm}>
            <div className="inputgroup">
              <label htmlFor="title">Title: </label>
              <input
                type="text"
                id="title"
                name="title"
                autoComplete="off"
                value={updatedStakeholder.title}
                placeholder="Title"
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
                value={updatedStakeholder.name}
                placeholder="Name"
                onChange={inputChangeHandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="contact">Contact: </label>
              <input
                type="text"
                id="contact"
                name="contact"
                autoComplete="off"
                value={updatedStakeholder.contact}
                placeholder="Contact"
                onChange={inputChangeHandler}
              />
            </div>
            <div className="inputgroup">
              <button type="submit">Update Stakeholder</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default EditStakeholder;
