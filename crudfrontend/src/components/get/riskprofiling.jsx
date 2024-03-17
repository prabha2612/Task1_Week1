import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import AddRiskProfileModal from "../add/addriskprofiling";

const RiskProfile = () => {
  const [riskProfiles, setRiskProfiles] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/riskprofile/getriskprofile");
        setRiskProfiles(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const deleteRiskProfile = async (riskProfileId) => {
    try {
      const response = await axios.delete(`http://localhost:4000/api/riskprofile/deleteriskprofile/${riskProfileId}`);
      setRiskProfiles((prevRiskProfiles) => prevRiskProfiles.filter((profile) => profile._id !== riskProfileId));
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
        Add Risk Profile
      </button>
      {isModalOpen && (
        <AddRiskProfileModal
          closeModal={() => {
            setIsModalOpen(false);
          }}
        />
      )}
      <table border={0} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Risk Type</th>
            <th>Description</th>
            <th>Severity</th>
            <th>Impact</th>
            <th>Remedial Steps</th>
            <th>Status</th>
            <th>Closure Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {riskProfiles.map((profile, index) => (
            <tr key={profile._id}>
              <td>{index + 1}</td>
              <td>{profile.riskType}</td>
              <td>{profile.description}</td>
              <td>{profile.severity}</td>
              <td>{profile.impact}</td>
              <td>{profile.remedialsteps}</td>
              <td>{profile.status}</td>
              <td>{new Date(profile.closuredate).toLocaleDateString()}</td>
              <td className="actionButton">
                <button onClick={() => deleteRiskProfile(profile._id)}>
                  <i className="fa-solid fa-trash"></i>
                </button>
                <Link to={`/riskprofiling/editriskprofiling/${profile._id}`}>
                  <i className="fa-solid fa-pen-to-square"></i>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RiskProfile;
