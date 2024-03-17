import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import "./update.css";

const EditStakeholder = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [updatedStakeholder, setUpdatedStakeholder] = useState({
    title: "",
    name: "",
    contact: "",
  });

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setUpdatedStakeholder({ ...updatedStakeholder, [name]: value });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/stakeholders/getonestakeholders/${id}`)
      .then((response) => {
        setUpdatedStakeholder(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const submitForm = async (event) => {
    event.preventDefault();
    try {
      await axios.patch(
        `http://localhost:4000/api/stakeholders/updatestakeholders/${id}`,
        updatedStakeholder
      );
      toast.success("Stakeholder updated successfully", { position: "top-right" });
      navigate("/stakeholders");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="editaudit">
      <h3>Edit Stakeholder</h3>
      <Link to="/stakeholders">Back</Link>
      <form className="editAuditForm" onSubmit={submitForm}>
        <div className="inputgroup">
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            name="title"
            autoComplete="off"
            value={updatedStakeholder.title}
            placeholder="Title"
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
            value={updatedStakeholder.name}
            placeholder="Name"
            onChange={inputChangeHandler}
          />
        </div>
        <div className="inputgroup">
          <label htmlFor="contact">Contact: </label>
          <input
            type="text"
            id="contact"
            name="contact"
            autoComplete="off"
            value={updatedStakeholder.contact}
            placeholder="Contact"
            onChange={inputChangeHandler}
          />
        </div>
        <div className="inputgroup">
          <button type="submit">Update Stakeholder</button>
        </div>
      </form>
    </div>
  );
};

export default EditStakeholder;
