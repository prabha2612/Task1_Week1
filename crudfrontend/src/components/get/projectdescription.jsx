import React, { useEffect, useState } from "react";
import "./audit.css";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import AddDescriptionmodal from "../add/adddescription";

const ProjectDescription = () => {
  const [descriptions, setDescriptions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://localhost:4000/api/description/getdescription"
      );
      setDescriptions(response.data);
    };

    fetchData();
  }, []);

  const deleteDescription = async (descriptionId) => {
    await axios
      .delete(`http://localhost:4000/api/description/deletedescription/${descriptionId}`)
      .then((response) => {
        setDescriptions((prevDescriptions) =>
          prevDescriptions.filter((description) => description._id !== descriptionId)
        );
        toast.success(response.data.msg, { position: "top-right" });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="AuditHistory">
      <button
        onClick={() => {
          setIsModalOpen(true);
        }}
        className="addButton"
      >
        Add Project Description
      </button>
      {isModalOpen && <AddDescriptionmodal closeModal={() => setIsModalOpen(false)} />}
      
      {descriptions.map((description, index) => (
        <div key={description._id} className="descriptionBox">
          <label htmlFor={`description${index}`}>Project Description:</label>
          <textarea
            id={`description${index}`}
            value={description.projectDescription}
            readOnly
          ></textarea>
          <div className="actionButton">
            <button onClick={() => deleteDescription(description._id)}>
              <i className="fa-solid fa-trash"></i>
            </button>
            <br />
            <Link to={"/Description/editdescription/" + description._id}>
                    <i className="fa-solid fa-pen-to-square"></i>
                  </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectDescription;
