import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Edit = () => {
  const audits = {
    auditDate: "",
    reviewedby: "",
    status: "",
    reviewedsection: "",
    comments: "",
    actionitem: "",
  };

  const {id} = useParams();
  const navigate = useNavigate();
  const [audit, setAudit] = useState(audits);

  const inputchangehandler = (event) => {
    const { name, value } = event.target;
    setAudit({ ...audit, [name]: value });
  };

  useEffect(() => {
    axios.get(`http://localhost:4000/api/auidt/getoneaudit/${id}`).then((response) => {
        setAudit(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const submitform = async (event) => {
    event.preventDefault();
    console.log(audit);
    await axios
      .patch(`http://localhost:4000/api/audit/updateaudit/${id}`, audit)
      .then((response) => {
        toast.success(response.data.msg, { positiion: "top-right" });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h3>Edit Audit History</h3>
      <Link to="/">Dashboard</Link>
      <form onSubmit={submitform}>
        <div className="inputgroup">
          <label htmlFor="auditDate">Date of Audit: </label>
          <input
            type="date"
            id="auditDate"
            name="auditDate"
            autoComplete="off"
            value={audit.auditDate}
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
            value={audit.reviewedby}
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
            value={audit.status}
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
            value={audit.reviewedsection}
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
            value={audit.comments}
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
            value={audit.actionitem}
            placeholder="Action Item:"
            onChange={inputchangehandler}
          />
        </div>
        <div className="inputgroup">
          <button type="submit">Add Audit</button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
