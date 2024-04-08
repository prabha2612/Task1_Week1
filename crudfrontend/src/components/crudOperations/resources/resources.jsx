import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import AddResourcesModal from "./addResources";
import EditResourceModal from "./editResources";

const Resources = () => {
  const [resources, setResources] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedResources, setSelectedResources] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/resources");
        setResources(response.data);
      } catch (error) {
        console.error("Error fetching resources:", error);
      }
    };

    fetchData();
  }, []);

  const deleteResource = async (resourceId) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/api/resources/${resourceId}`
      );
      setResources((prevResources) =>
        prevResources.filter((resource) => resource._id !== resourceId)
      );
      toast.success(response.data.msg, { position: "top-right" });
    } catch (error) {
      console.error("Error deleting resource:", error);
    }
  };

  return (
    <div className="AuditHistory">
      <button onClick={() => setIsModalOpen(true)} className="addButton">
        Add Resource
      </button>
      {isModalOpen && (
        <AddResourcesModal closeModal={() => setIsModalOpen(false)} />
      )}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Resource Name</th>
            <th>Role</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Comment</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {resources.map((resource) => (
            <tr key={resource._id}>
              <td>{resource._id}</td>
              <td>{resource.resourceName}</td>
              <td>{resource.Role}</td>
              <td>{resource.startDate}</td>
              <td>{resource.endDate}</td>
              <td>{resource.comment}</td>
              <td>
                <button onClick={() => deleteResource(resource._id)}>
                  <i className="fa-solid fa-trash"></i>
                </button>
                <Link to={`/resources/editresources/${resource._id}`}>
                  <i className="fa-solid fa-pen-to-square"></i>
                </Link>
                <button
                  onClick={() => {
                    setSelectedResources(resource._id);
                    setIsModalOpen(true);
                  }}
                  className="addButton"
                >
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
                {isModalOpen && (
                  <EditResourceModal
                    resourcesId={selectedResources}
                    closeModal={() => setIsModalOpen(false)}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Resources;
