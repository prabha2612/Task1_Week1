import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import "./update.css";

const EditProjectUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [updatedUpdate, setUpdatedUpdate] = useState({
    Date: "",
    generalUpdates: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/projectupdates/getoneupdate/${id}`
        );
        setUpdatedUpdate(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setUpdatedUpdate({ ...updatedUpdate, [name]: value });
  };

  const submitForm = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.patch(
        `http://localhost:4000/api/projectupdates/updateupdate/${id}`,
        updatedUpdate
      );
      toast.success(response.data.msg, { position: "top-right" });
      navigate("/projectupdates"); // Navigate back to the project updates page after successful submission
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="editupdate">
      <h3>Edit Project Update</h3>
      <Link to="/projectupdates">Back</Link>
      <form className="editUpdateForm" onSubmit={submitForm}>
        <div className="inputgroup">
          <label htmlFor="Date">Date:</label>
          <input
            type="text"
            id="Date"
            name="Date"
            value={updatedUpdate.Date}
            onChange={inputChangeHandler}
          />
        </div>
        <div className="inputgroup">
          <label htmlFor="generalUpdates">General Updates:</label>
          <input
            type="text"
            id="generalUpdates"
            name="generalUpdates"
            value={updatedUpdate.generalUpdates}
            onChange={inputChangeHandler}
          />
        </div>
        <div className="inputgroup">
          <button type="submit">Update Project Update</button>
        </div>
      </form>
    </div>
  );
};

export default EditProjectUpdate;
