import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import AddScopeModal from "../add/addscope";
import { Link } from "react-router-dom";

const ProjectScope = () => {
  const [scopes, setScopes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/scope/getscope");
        setScopes(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const deleteScope = async (scopeId) => {
    try {
      const response = await axios.delete(`http://localhost:4000/api/scope/deletescope/${scopeId}`);
      setScopes((prevScopes) => prevScopes.filter((scope) => scope._id !== scopeId));
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
        Add Project Scope
      </button>
      {/* AddScopeModal component will handle adding new scopes */}
      {isModalOpen && <AddScopeModal closeModal={() => setIsModalOpen(false)} />}
      
      {scopes.map((scope, index) => (
        <div key={scope._id} className="scopeBox">
          <label htmlFor={`scope${index}`}>Project Scope:</label>
          <textarea
            id={`scope${index}`}
            value={scope.projectScope}
            readOnly
          ></textarea>
          <div className="actionButton">
            <button onClick={() => deleteScope(scope._id)}>
              <i className="fa-solid fa-trash"></i>
            </button>
            <br />
            <Link to={"/scope/editscope/" + scope._id}>
                    <i className="fa-solid fa-pen-to-square"></i>
                  </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectScope;
