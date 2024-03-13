// AddAuditModal.jsx
import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "./addmodal.css";

const AddAuditModal = ({ closeModal }) => {
  const [audit, setAudit] = useState({
    auditDate: "",
    reviewedby: "",
    status: "",
    reviewedsection: "",
    comments: "",
    actionitem: "",
  });

  const inputhandler = (event) => {
    const { name, value } = event.target;
    setAudit({ ...audit, [name]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/audit/createaudit",
        audit
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
      {/* <div className="modal-background" onClick={onClose}></div> */}
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">New Audit</p>
          {/* <button
            className="delete"
            onClick={onClose}
            aria-label="close"
          ></button> */}
        </header>
        <section className="modal-card-body">
          <form onSubmit={submitHandler}>
            <div className="inputgroup">
              <label htmlFor="auditDate">Date of Audit: </label>
              <input
                type="date"
                id="auditDate"
                name="auditDate"
                autoComplete="off"
                placeholder="Date of Audit:"
                onChange={inputhandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="reviewedby">Reviewed by: </label>
              <input
                type="text"
                id="reviewedby"
                name="reviewedby"
                autoComplete="off"
                placeholder="Reviewed by:"
                onChange={inputhandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="status">Status: </label>
              <input
                type="text"
                id="status"
                name="status"
                autoComplete="off"
                placeholder="Status:"
                onChange={inputhandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="reviewedsection">Reviewed Section: </label>
              <input
                type="text"
                id="reviewedsection"
                name="reviewedsection"
                autoComplete="off"
                placeholder="Reviewed Section:"
                onChange={inputhandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="comments">Comments/Queries: </label>
              <input
                type="text"
                id="comments"
                name="comments"
                autoComplete="off"
                placeholder="Comments/Queries:"
                onChange={inputhandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="actionitem">Action Item: </label>
              <input
                type="text"
                id="actionitem"
                name="actionitem"
                autoComplete="off"
                placeholder="Action Item:"
                onChange={inputhandler}
              />
            </div>
            <div className="inputgroup">
              <button type="submit">Add Audit</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AddAuditModal;
