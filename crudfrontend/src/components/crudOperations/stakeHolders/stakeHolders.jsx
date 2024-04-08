import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import AddStakeholderModal from "./addStakeHolders";
import EditStakeholder from "./editStakeHolders";

const Stakeholders = () => {
  const [stakeholders, setStakeholders] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStakeholders, setSelectedStakeholders] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/stakeholders"
        );
        setStakeholders(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const deleteStakeholder = async (stakeholderId) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/api/stakeholders/${stakeholderId}`
      );
      setStakeholders((prevStakeholders) =>
        prevStakeholders.filter(
          (stakeholder) => stakeholder._id !== stakeholderId
        )
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
        Add Stakeholder
      </button>
      {isModalOpen && (
        <AddStakeholderModal
          closeModal={() => {
            setIsModalOpen(false);
          }}
        />
      )}
      <table border={0} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Name</th>
            <th>Contact</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {stakeholders.map((stakeholder, index) => (
            <tr key={stakeholder._id}>
              <td>{index + 1}</td>
              <td>{stakeholder.title}</td>
              <td>{stakeholder.name}</td>
              <td>{stakeholder.contact}</td>
              <td className="actionButton">
                <button onClick={() => deleteStakeholder(stakeholder._id)}>
                  <i className="fa-solid fa-trash"></i>
                </button>
                <button
                  onClick={() => {
                    setSelectedStakeholders(stakeholder._id);
                    setIsModalOpen(true);
                  }}
                  className="addButton"
                >
                  <i className="fa-solid fa-pen-to-square"> </i>
                </button>
                {isModalOpen && (
                  <EditStakeholder
                    sprintwiseId={selectedStakeholders}
                    closeModal={() => {
                      setIsModalOpen(false);
                    }}
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

export default Stakeholders;
