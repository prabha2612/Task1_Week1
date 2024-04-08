import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import "../styling/addmodal.css";

const EditTechstack = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [updatedTechstack, setUpdatedTechstack] = useState({
    backend: "",
    frontend: "",
    mobileapp: "",
    database: "",
    infrastructure: "",
  });

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setUpdatedTechstack({ ...updatedTechstack, [name]: value });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/techstack/getonetechstack/${id}`)
      .then((response) => {
        setUpdatedTechstack(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const submitForm = async (event) => {
    event.preventDefault();
    try {
      await axios.patch(
        `http://localhost:4000/api/techstack/deletetechstack/${id}`,
        updatedTechstack
      );
      toast.success("Techstack updated successfully", { position: "top-right" });
      navigate("/techstacks");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="editaudit">
      <h3>Edit Techstack</h3>
      <Link to="/techstacks">Back</Link>
      <form className="editAuditForm" onSubmit={submitForm}>
        <div className="inputgroup">
          <label htmlFor="backend">Backend: </label>
          <input
            type="text"
            id="backend"
            name="backend"
            autoComplete="off"
            value={updatedTechstack.backend}
            placeholder="Backend"
            onChange={inputChangeHandler}
          />
        </div>
        <div className="inputgroup">
          <label htmlFor="frontend">Frontend: </label>
          <input
            type="text"
            id="frontend"
            name="frontend"
            autoComplete="off"
            value={updatedTechstack.frontend}
            placeholder="Frontend"
            onChange={inputChangeHandler}
          />
        </div>
        <div className="inputgroup">
          <label htmlFor="mobileapp">Mobile App: </label>
          <input
            type="text"
            id="mobileapp"
            name="mobileapp"
            autoComplete="off"
            value={updatedTechstack.mobileapp}
            placeholder="Mobile App"
            onChange={inputChangeHandler}
          />
        </div>
        <div className="inputgroup">
          <label htmlFor="database">Database: </label>
          <input
            type="text"
            id="database"
            name="database"
            autoComplete="off"
            value={updatedTechstack.database}
            placeholder="Database"
            onChange={inputChangeHandler}
          />
        </div>
        <div className="inputgroup">
          <label htmlFor="infrastructure">Infrastructure: </label>
          <input
            type="text"
            id="infrastructure"
            name="infrastructure"
            autoComplete="off"
            value={updatedTechstack.infrastructure}
            placeholder="Infrastructure"
            onChange={inputChangeHandler}
          />
        </div>
        <div className="inputgroup">
          <button type="submit">Update Techstack</button>
        </div>
      </form>
    </div>
  );
};

export default EditTechstack;
