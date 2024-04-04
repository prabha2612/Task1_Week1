import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import "./update.css";

const EditFinescMatrix = () => {
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
      .get(`http://localhost:4000/api/finescmatrix/getonefinescmatrix/${id}`)
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
        `http://localhost:4000/api/finescmatrix/updatfinpescmatrix/${id}`,
        updatedMatrix
      );
      toast.success("Finesc Matrix updated successfully", {
        position: "top-right",
      });
      navigate("/finescalationmatrix");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="editaudit">
      <h3>Edit Finesc Matrix</h3>
      <Link to="/finescalationmatrix">Back</Link>
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
          <button type="submit">Update Finesc Matrix</button>
        </div>
      </form>
    </div>
  );
};

export default EditFinescMatrix;
