import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "../styling/addmodal.css";


const EditAuditModal = ({ auditId, closeModal }) => {
  const [updatedaudit, setUpdatedaudit] = useState({
    auditDate: "",
    reviewedby: "",
    status: "",
    reviewedsection: "",
    comments: "",
    actionitem: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/audits/${auditId}`
        );
        setUpdatedaudit(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [auditId]);

  const inputchangehandler = (event) => {
    const { name, value } = event.target;
    setUpdatedaudit({ ...updatedaudit, [name]: value });
    console.log(updatedaudit);
  };

  const submitform = async (event) => {
    event.preventDefault();
    await axios
      .patch(`http://localhost:4000/api/audits/${auditId}`, updatedaudit)
      .then((response) => {
        toast.success(response.data.msg, { positiion: "top-right" });
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
          <p className="modal-card-title">Edit Audit History</p>
        </header>
        <section className="modal-card-body">
          <form onSubmit={submitform}>
            <div className="inputgroup">
              <label htmlFor="auditDate">Date of Audit: </label>
              <input
                type="date"
                id="auditDate"
                name="auditDate"
                autoComplete="off"
                value={updatedaudit.auditDate}
                placeholder="Date of Auidt:"
                onChange={inputchangehandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="reviewedby">Reviewed by: </label>
              <input
                type="text"
                id="reviewedby"
                name="reviewedby"
                autoComplete="off"
                value={updatedaudit.reviewedby}
                placeholder="Reviewed by:"
                onChange={inputchangehandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="status">Status: </label>
              <input
                type="text"
                id="status"
                name="status"
                autoComplete="off"
                value={updatedaudit.status}
                placeholder="Status:"
                onChange={inputchangehandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="reviewedsection">Reviewed Section: </label>
              <input
                type="text"
                id="reviewedsection"
                name="reviewedsection"
                autoComplete="off"
                value={updatedaudit.reviewedsection}
                placeholder="Reviewed Section:"
                onChange={inputchangehandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="comments">Comments/Queries: </label>
              <input
                type="text"
                id="comments"
                name="comments"
                autoComplete="off"
                value={updatedaudit.comments}
                placeholder="Comments/Queries:"
                onChange={inputchangehandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="actionitem">Action Item: </label>
              <input
                type="text"
                id="actionitem"
                name="actionitem"
                autoComplete="off"
                value={updatedaudit.actionitem}
                placeholder="Action Item:"
                onChange={inputchangehandler}
              />
            </div>
            <div className="inputgroup">
              <button type="submit">Update Audit</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default EditAuditModal;
