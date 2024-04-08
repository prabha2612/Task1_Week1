import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "./addmodal.css";

const AddVersion = ({ closeModal }) => {
  const [version, setVersion] = useState({
    versionType: "",
    change: "",
    changeReason: "",
    createdBy: "",
    revisionDate: "",
    approvalDate: "",
    approvedBy: "",
  });

  const inputhandler = (event) => {
    const { name, value } = event.target;
    setVersion({ ...version, [name]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/versions",
        version
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
          <p className="modal-card-title">New Budget</p>
        </header>
        <section className="modal-card-body">
          <form onSubmit={submitHandler}>
            <div className="inputgroup">
              <label htmlFor="versionType">Type: </label>
              <input
                type="text"
                id="versionType"
                name="versionType"
                autoComplete="off"
                placeholder="version type"
                onChange={inputhandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="change">Change : </label>
              <input
                type="text"
                id="change"
                name="change"
                autoComplete="off"
                placeholder="change"
                onChange={inputhandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="changeReason">Change Reason: </label>
              <input
                type="text"
                id="changeReason"
                name="changeReason"
                autoComplete="off"
                placeholder="change Reason"
                onChange={inputhandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="createdBy">Created By: </label>
              <input
                type="text"
                id="createdBy"
                name="createdBy"
                autoComplete="off"
                placeholder="created By"
                onChange={inputhandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="revisionDate">Revision Date: </label>
              <input
                type="date"
                id="revisionDate"
                name="revisionDate"
                autoComplete="off"
                placeholder="Revision Date"
                onChange={inputhandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="approvalDate">Approval Date: </label>
              <input
                type="date"
                id="approvalDate"
                name="approvalDate"
                autoComplete="off"
                placeholder="Approval Date"
                onChange={inputhandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="approvedBy">Approved By: </label>
              <input
                type="text"
                id="approvedBy"
                name="approvedBy"
                autoComplete="off"
                placeholder="Approved By"
                onChange={inputhandler}
              />
            </div>
            <div className="inputgroup">
              <button type="submit">Add Version</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AddVersion;
