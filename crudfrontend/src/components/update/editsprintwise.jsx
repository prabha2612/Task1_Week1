import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const EditSprintModal = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [sprintData, setSprintData] = useState({
    sprint: "",
    startDate: "",
    endDate: "",
    status: "",
    comments: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/sprintwise/getonesprint/${id}`);
        setSprintData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setSprintData({ ...sprintData, [name]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.patch(`http://localhost:4000/api/sprintwise/updatesprint/${id}`, sprintData);
      toast.success(response.data.msg, { position: "top-right" });
      navigate("/sprintwise"); // Navigate back to the sprintwise page after successful submission
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="editaudit">
      <h3>Edit Sprint</h3>
      <Link to="/sprintwise">Back</Link>
      <form className="editAuditForm" onSubmit={submitHandler}>
        <div className="inputgroup">
          <label htmlFor="sprint">Sprint:</label>
          <input
            type="text"
            id="sprint"
            name="sprint"
            autoComplete="off"
            value={sprintData.sprint}
            onChange={inputHandler}
          />
        </div>
        <div className="inputgroup">
          <label htmlFor="startDate">Start Date:</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={sprintData.startDate}
            onChange={inputHandler}
          />
        </div>
        <div className="inputgroup">
          <label htmlFor="endDate">End Date:</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={sprintData.endDate}
            onChange={inputHandler}
          />
        </div>
        <div className="inputgroup">
          <label htmlFor="status">Status:</label>
          <input
            type="text"
            id="status"
            name="status"
            autoComplete="off"
            value={sprintData.status}
            onChange={inputHandler}
          />
        </div>
        <div className="inputgroup">
          <label htmlFor="comments">Comments:</label>
          <input
            type="text"
            id="comments"
            name="comments"
            autoComplete="off"
            value={sprintData.comments}
            onChange={inputHandler}
          />
        </div>
        <div className="inputgroup">
          <button type="submit">Update Sprint</button>
        </div>
      </form>
    </div>
  );
};

export default EditSprintModal;
