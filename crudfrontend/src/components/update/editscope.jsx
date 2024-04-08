import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "./update.css";

const EditScope = ({ scopeId, closeModal }) => {
  const [updatedScope, setUpdatedScope] = useState({
    projectScope: "",
  });

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setUpdatedScope({ ...updatedScope, [name]: value });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/scope/${scopeId}`)
      .then((response) => {
        setUpdatedScope(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [scopeId]);

  const submitForm = async (event) => {
    event.preventDefault();
    try {
      await axios.patch(
        `http://localhost:4000/api/scope/${scopeId}`,
        updatedScope
      );
      toast.success("Scope updated successfully", { position: "top-right" });
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
          <p className="modal-card-title">Edit Scope</p>
        </header>
        <section className="modal-card-body">
          <form className="editAuditForm" onSubmit={submitForm}>
            <div className="inputgroup">
              <label htmlFor="projectScope">Project Scope: </label>
              <textarea
                id="projectScope"
                name="projectScope"
                autoComplete="off"
                value={updatedScope.projectScope}
                placeholder="Project Scope"
                onChange={inputChangeHandler}
              />
            </div>
            <div className="inputgroup">
              <button type="submit">Update Scope</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default EditScope;
