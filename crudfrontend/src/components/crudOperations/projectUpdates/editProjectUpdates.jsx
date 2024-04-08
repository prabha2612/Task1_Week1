import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "../styling/addmodal.css";

const EditProjectUpdate = ({ projectUpdatesId, closeModal }) => {
  const [updatedUpdate, setUpdatedUpdate] = useState({
    Date: "",
    generalUpdates: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/projectupdates/${projectUpdatesId}`
        );
        setUpdatedUpdate(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [projectUpdatesId]);

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setUpdatedUpdate({ ...updatedUpdate, [name]: value });
  };

  const submitForm = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.patch(
        `http://localhost:4000/api/projectupdates/${projectUpdatesId}`,
        updatedUpdate
      );
      toast.success(response.data.msg, { position: "top-right" });
      closeModal(); // Navigate back to the project updates page after successful submission
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
          <p className="modal-card-title">Edit ProjectUpdates</p>
        </header>
        <section className="modal-card-body">
          <form className="editUpdateForm" onSubmit={submitForm}>
            <div className="inputgroup">
              <label htmlFor="Date">Date:</label>
              <input
                type="text"
                id="Date"
                name="Date"
                value={updatedUpdate.Date}
                onChange={inputChangeHandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="generalUpdates">General Updates:</label>
              <input
                type="text"
                id="generalUpdates"
                name="generalUpdates"
                value={updatedUpdate.generalUpdates}
                onChange={inputChangeHandler}
              />
            </div>
            <div className="inputgroup">
              <button type="submit">Update Project Update</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default EditProjectUpdate;
