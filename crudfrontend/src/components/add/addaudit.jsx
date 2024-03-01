import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Add = () => {
  const audits = {
    auditDate: "",
    reviewedby: "",
    status: "",
    reviewedsection: "",
    comments: "",
    actionitem: "",
  };

  const [audit, setAudit] = useState(audits);
  const navigate = useNavigate();

  const inputhandler = (event) => {
    const { name, value } = event.target;
    setAudit({ ...audit, [name]: value });
    console.log(audit);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(audit);
    await axios.post("/creata api/",audit)
    .then((response) => {
      toast.success(response.data.msg, {positiion: "top-right"})
      navigate("/")
    }).catch((error) => {
      console.log(error)
    })
  };
  return (
    <div className="addAudit">
      <Link to={"/"}>Back</Link>
      <h3>New Audit</h3>
      <form onSubmit={handlesubmit}>
        <div className="inputgroup">
          <label htmlFor="auditDate">Date of Audit: </label>
          <input
            type="date"
            id="auditDate"
            name="auditDate"
            autoComplete="off"
            placeholder="Date of Auidt:"
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
    </div>
  );
};

export default Add;
