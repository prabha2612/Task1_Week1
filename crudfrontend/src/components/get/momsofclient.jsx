import React, { useEffect, useState } from "react";
import axios from "axios";
import "./audit.css";
import AddMOMModal from "../add/addMoMs";
import EditMOM from "../update/editMoMs";

const MOM = () => {
  const [momData, setMomData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMom, setSelectedMom] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/moms");
        setMomData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="AuditHistory">
      <button
        onClick={() => {
          setIsModalOpen(true);
        }}
        className="addButton"
      >
        Add MOM
      </button>
      {isModalOpen && (
        <AddMOMModal
          closeModal={() => {
            setIsModalOpen(false);
          }}
        />
      )}
      <table border={0} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Duration</th>
            <th>MOM Link</th>
            <th>Comments</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {momData.map((mom, index) => (
            <tr key={mom._id}>
              <td>{index + 1}</td>
              <td>{mom.Date}</td>
              <td>{mom.Duration}</td>
              <td>{mom.momLink}</td>
              <td>{mom.comments}</td>
              <td className="actionButton">
                <button
                  onClick={() => {
                    setIsModalOpen(true);
                    setSelectedMom(mom._id);
                  }}
                  className="addButton"
                >
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
                {isModalOpen && (
                  <EditMOM
                    momId={selectedMom}
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

export default MOM;
