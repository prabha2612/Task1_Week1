import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import "./update.css";

const EditBudget = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [updatedbudget, setUpdatedbudget] = useState({
    projecttype: "",
    Duration: "",
    budgetedhours: "",
  });

  const inputchangehandler = (event) => {
    const { name, value } = event.target;
    setUpdatedbudget({ ...updatedbudget, [name]: value });
    console.log(updatedbudget);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/budget/getonebudget/${id}`)
      .then((response) => {
        setUpdatedbudget(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const submitform = async (event) => {
    event.preventDefault();
    await axios
      .patch(
        `http://localhost:4000/api/budget/updatebudget/${id}`,
        updatedbudget
      )
      .then((response) => {
        toast.success(response.data.msg, { position: "top-right" });
        navigate("/budget");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="editaudit">
      <h3>Edit Audit History</h3>
      <Link to="/budget">Back</Link>
      <form className="editAuditForm" onSubmit={submitform}>
        <div className="inputgroup">
          <label htmlFor="projecttype">Project Type: </label>
          <input
            type="text"
            id="projecttype"
            name="projecttype"
            autoComplete="off"
            value={updatedbudget.projecttype}
            placeholder="monthly/fixed"
            onChange={inputchangehandler}
          />
        </div>
        <div className="inputgroup">
          <label htmlFor="Duration">Duration: </label>
          <input
            type="number"
            id="Duration"
            name="Duration"
            autoComplete="off"
            value={updatedbudget.Duration}
            placeholder="Duration:"
            onChange={inputchangehandler}
          />
        </div>
        <div className="inputgroup">
          <label htmlFor="budgetedhours">Budgeted Hours: </label>
          <input
            type="text"
            id="budgetedhours"
            name="budgetedhours"
            autoComplete="off"
            value={updatedbudget.budgetedhours}
            placeholder="Budgeted hours :"
            onChange={inputchangehandler}
          />
        </div>
        <div className="inputgroup">
          <button type="submit">Update Budget</button>
        </div>
      </form>
    </div>
  );
};

export default EditBudget;
