import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import "./update.css";

const EditScope = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [updatedScope, setUpdatedScope] = useState({
    projectScope: "",
  });

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setUpdatedScope({ ...updatedScope, [name]: value });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/scope/getonescope/${id}`)
      .then((response) => {
        setUpdatedScope(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const submitForm = async (event) => {
    event.preventDefault();
    try {
      await axios.patch(
        `http://localhost:4000/api/scope/updatescope/${id}`,
        updatedScope
      );
      toast.success("Scope updated successfully", { position: "top-right" });
      navigate("/scopes");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="editaudit">
      <h3>Edit Project Scope</h3>
      <Link to="/scopes">Back</Link>
      <form className="editAuditForm" onSubmit={submitForm}>
        <div className="inputgroup">
          <label htmlFor="projectScope">Project Scope: </label>
          <textarea
            id="projectScope"
            name="projectScope"
            autoComplete="off"
            value={updatedScope.projectScope}
            placeholder="Project Scope"
            onChange={inputChangeHandler}
          />
        </div>
        <div className="inputgroup">
          <button type="submit">Update Scope</button>
        </div>
      </form>
    </div>
  );
};

export default EditScope;
