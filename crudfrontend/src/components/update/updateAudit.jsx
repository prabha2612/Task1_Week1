import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import "./update.css";

const Editaudit = () => {
  const audits = {
    auditDate: "",
    reviewedby: "",
    status: "",
    reviewedsection: "",
    comments: "",
    actionitem: "",
  };

  const { id } = useParams();
  const navigate = useNavigate();
  const [updatedaudit, setUpdatedaudit] = useState(audits);

  const inputchangehandler = (event) => {
    const { name, value } = event.target;
    setUpdatedaudit({ ...updatedaudit, [name]: value });
    console.log(updatedaudit);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/audit/getoneaudit/${id}`)
      .then((response) => {
        setUpdatedaudit(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const submitform = async (event) => {
    event.preventDefault();
    await axios
      .patch(`http://localhost:4000/api/audit/updateaudit/${id}`, updatedaudit)
      .then((response) => {
        toast.success(response.data.msg, { positiion: "top-right" });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="editaudit">
      {/* <div className="modal-content" onClick={(e) => e.stopPropagation()}> */}
      <h3>Edit Audit History</h3>
      <Link to="/">Dashboard</Link>
      <form className="editAuditForm" onSubmit={submitform}>
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
      {/* </div> */}
    </div>
  );
};

export default Editaudit;
