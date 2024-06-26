import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "../styling/addmodal.css";

const EditVersion = ({ versionId, closeModal }) => {
  const [updatedversion, setUpdatedversion] = useState({
    versionType: "",
    change: "",
    changeReason: "",
    createdBy: "",
    revisionDate: "",
    approvalDate: "",
    approvedBy: "",
  });

  const inputchangehandler = (event) => {
    const { name, value } = event.target;
    setUpdatedversion({ ...updatedversion, [name]: value });
    console.log(updatedversion);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/versions/${versionId}`)
      .then((response) => {
        setUpdatedversion(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [versionId]);

  const submitform = async (event) => {
    event.preventDefault();
    await axios
      .patch(`http://localhost:4000/api/versions/${versionId}`, updatedversion)
      .then((response) => {
        toast.success(response.data.msg, { position: "top-right" });
        closeModal();
      })
      .catch((error) => {
        console.log(error);
      });
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
          <p className="modal-card-title">Edit Version History</p>
        </header>
        <section className="modal-card-body">
          <form className="editAuditForm" onSubmit={submitform}>
            <div className="inputgroup">
              <label htmlFor="versionType">Version Type: </label>
              <input
                type="text"
                id="versionType"
                name="versionType"
                autoComplete="off"
                value={updatedversion.versionType}
                placeholder="Version Type:"
                onChange={inputchangehandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="change">Change: </label>
              <input
                type="number"
                id="change"
                name="change"
                autoComplete="off"
                value={updatedversion.change}
                placeholder="change:"
                onChange={inputchangehandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="changeReason">Change Reason: </label>
              <input
                type="text"
                id="changeReason"
                name="changeReason"
                autoComplete="off"
                value={updatedversion.changeReason}
                placeholder="change Reason :"
                onChange={inputchangehandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="createdBy">Created By: </label>
              <input
                type="text"
                id="createdBy"
                name="createdBy"
                autoComplete="off"
                value={updatedversion.createdBy}
                placeholder="created By:"
                onChange={inputchangehandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="revisionDate">Revision Date: </label>
              <input
                type="date"
                id="revisionDate"
                name="revisionDate"
                autoComplete="off"
                value={updatedversion.revisionDate}
                placeholder="Revision Date :"
                onChange={inputchangehandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="approvalDate">Approval Date: </label>
              <input
                type="date"
                id="approvalDate"
                name="approvalDate"
                autoComplete="off"
                value={updatedversion.approvalDate}
                placeholder="Approval Date:"
                onChange={inputchangehandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="approvedBy">Approved By: </label>
              <input
                type="string"
                id="approvedBy"
                name="approvedBy"
                autoComplete="off"
                value={updatedversion.approvedBy}
                placeholder="ApprovedBy:"
                onChange={inputchangehandler}
              />
            </div>
            <div className="inputgroup">
              <button type="submit">Update Version</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default EditVersion;
