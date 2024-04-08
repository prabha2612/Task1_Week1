import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "./update.css";

const EditDescription = ({ descriptionId, closeModal }) => {
  const [updatedDescription, setUpdatedDescription] = useState({
    projectDescription: "",
  });

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setUpdatedDescription({ ...updatedDescription, [name]: value });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/descriptions/${descriptionId}`)
      .then((response) => {
        setUpdatedDescription(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [descriptionId]);

  const submitForm = async (event) => {
    event.preventDefault();
    try {
      await axios.patch(
        `http://localhost:4000/api/descriptions/${descriptionId}`,
        updatedDescription
      );
      toast.success("Description updated successfully", {
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
          <p className="modal-card-title">Edit Description</p>
        </header>
        <section className="modal-card-body">
          <form className="editAuditForm" onSubmit={submitForm}>
            <div className="inputgroup">
              <label htmlFor="projectDescription">Project Description: </label>
              <textarea
                id="projectDescription"
                name="projectDescription"
                autoComplete="off"
                value={updatedDescription.projectDescription}
                placeholder="Project Description"
                onChange={inputChangeHandler}
              />
            </div>
            <div className="inputgroup">
              <button type="submit">Update Description</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default EditDescription;
