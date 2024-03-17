import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import "./update.css";

const EditDescription = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [updatedDescription, setUpdatedDescription] = useState({
    projectDescription: "",
  });

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setUpdatedDescription({ ...updatedDescription, [name]: value });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/description/getonedescription/${id}`)
      .then((response) => {
        setUpdatedDescription(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const submitForm = async (event) => {
    event.preventDefault();
    try {
      await axios.patch(
        `http://localhost:4000/api/description/updatedescription/${id}`,
        updatedDescription
      );
      toast.success("Description updated successfully", { position: "top-right" });
      navigate("/description");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="editaudit">
      <h3>Edit Project Description</h3>
      <Link to="/description">Back</Link>
      <form className="editAuditForm" onSubmit={submitForm}>
        <div className="inputgroup">
          <label htmlFor="projectDescription">Project Description: </label>
          <textarea
            id="projectDescription"
            name="projectDescription"
            autoComplete="off"
            value={updatedDescription.projectDescription}
            placeholder="Project Description"
            onChange={inputChangeHandler}
          />
        </div>
        <div className="inputgroup">
          <button type="submit">Update Description</button>
        </div>
      </form>
    </div>
  );
};

export default EditDescription;
