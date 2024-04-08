import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import AddTechstackModal from "../add/addtechstack";
import { Link } from "react-router-dom";
import EditTechstack from "../update/edittechstack";

const Techstack = () => {
  const [techstacks, setTechstacks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTechstack, setselectedTechstack] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/techstack");
        setTechstacks(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const deleteTechstack = async (techstackId) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/api/techstack/${techstackId}`
      );
      setTechstacks((prevTechstacks) =>
        prevTechstacks.filter((techstack) => techstack._id !== techstackId)
      );
      toast.success(response.data.msg, { position: "top-right" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="AuditHistory">
      <button
        onClick={() => {
          setIsModalOpen(true);
        }}
        className="addButton"
      >
        Add Techstack
      </button>
      {isModalOpen && (
        <AddTechstackModal closeModal={() => setIsModalOpen(false)} />
      )}

      {techstacks.map((techstack, index) => (
        <div key={techstack._id} className="techstackBox">
          <label>Backend:</label>
          <div>{techstack.backend}</div>
          <label>Frontend:</label>
          <div>{techstack.frontend}</div>
          <label>Mobile App:</label>
          <div>{techstack.mobileapp}</div>
          <label>Database:</label>
          <div>{techstack.database}</div>
          <label>Infrastructure:</label>
          <div>{techstack.infrastructure}</div>
          <div className="actionButton">
            <button onClick={() => deleteTechstack(techstack._id)}>
              <i className="fa-solid fa-trash"></i>
            </button>
            <br />
            <Link to={"/projectstack/edittechstack/" + techstack._id}>
              <i className="fa-solid fa-pen-to-square"></i>
            </Link>
            <button
              onClick={() => {
                setselectedTechstack(techstack._id);
                setIsModalOpen(true);
              }}
              className="addButton"
            >
              <i className="fa-solid fa-pen-to-square"></i>
            </button>
            {isModalOpen && (
              <EditTechstack
                matrixId={selectedTechstack}
                closeModal={() => setIsModalOpen(false)}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Techstack;
