import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const EditResourceModal = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [resourceData, setResourceData] = useState({
    resourceName: "",
    Role: "",
    startDate: "",
    endDate: "",
    comment: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/resources/getresource/${id}`
        );
        setResourceData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setResourceData({ ...resourceData, [name]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.patch(
        `http://localhost:4000/api/resources/updateresource/${id}`,
        resourceData
      );
      toast.success(response.data.msg, { position: "top-right" });
      navigate("/resources"); // Navigate back to the resources page after successful submission
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="editresource">
      <h3>Edit Resource</h3>
      <Link to="/resources">Back</Link>
      <form className="editResourceForm" onSubmit={submitHandler}>
        <div className="inputgroup">
          <label htmlFor="resourceName">Resource Name:</label>
          <input
            type="text"
            id="resourceName"
            name="resourceName"
            autoComplete="off"
            value={resourceData.resourceName}
            onChange={inputHandler}
          />
        </div>
        <div className="inputgroup">
          <label htmlFor="Role">Role:</label>
          <input
            type="text"
            id="Role"
            name="Role"
            autoComplete="off"
            value={resourceData.Role}
            onChange={inputHandler}
          />
        </div>
        <div className="inputgroup">
          <label htmlFor="startDate">Start Date:</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={resourceData.startDate}
            onChange={inputHandler}
          />
        </div>
        <div className="inputgroup">
          <label htmlFor="endDate">End Date:</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={resourceData.endDate}
            onChange={inputHandler}
          />
        </div>
        <div className="inputgroup">
          <label htmlFor="comment">Comment:</label>
          <input
            type="text"
            id="comment"
            name="comment"
            autoComplete="off"
            value={resourceData.comment}
            onChange={inputHandler}
          />
        </div>
        <div className="inputgroup">
          <button type="submit">Update Resource</button>
        </div>
      </form>
    </div>
  );
};

export default EditResourceModal;
