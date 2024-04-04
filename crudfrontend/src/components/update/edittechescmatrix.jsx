import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import "./update.css";

const EditTechescMatrix = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [updatedMatrix, setUpdatedMatrix] = useState({
    escalationlevel: "",
    name: "",
    role: "",
  });

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setUpdatedMatrix({ ...updatedMatrix, [name]: value });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/techescmatrix/getonetechescmatrix/${id}`)
      .then((response) => {
        setUpdatedMatrix(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const submitForm = async (event) => {
    event.preventDefault();
    try {
      await axios.patch(
        `http://localhost:4000/api/techescmatrix/updattechpescmatrix/${id}`,
        updatedMatrix
      );
      toast.success("Techesc Matrix updated successfully", {
        position: "top-right",
      });
      navigate("/techescalationmatrix");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="editaudit">
      <h3>Edit Techesc Matrix</h3>
      <Link to="/techescalationmatrix">Back</Link>
      <form className="editAuditForm" onSubmit={submitForm}>
        <div className="inputgroup">
          <label htmlFor="escalationlevel">Escalation Level: </label>
          <input
            type="text"
            id="escalationlevel"
            name="escalationlevel"
            autoComplete="off"
            value={updatedMatrix.escalationlevel}
            placeholder="Escalation Level"
            onChange={inputChangeHandler}
          />
        </div>
        <div className="inputgroup">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="off"
            value={updatedMatrix.name}
            placeholder="Name"
            onChange={inputChangeHandler}
          />
        </div>
        <div className="inputgroup">
          <label htmlFor="role">Role: </label>
          <input
            type="text"
            id="role"
            name="role"
            autoComplete="off"
            value={updatedMatrix.role}
            placeholder="Role"
            onChange={inputChangeHandler}
          />
        </div>
        <div className="inputgroup">
          <button type="submit">Update Techesc Matrix</button>
        </div>
      </form>
    </div>
  );
};

export default EditTechescMatrix;
