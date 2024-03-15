import React, { useEffect, useState } from "react";
import "./audit.css";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import AddVersion from "../add/addVersionhistory.jsx";

const Version = () => {
  const [versions, setVersions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://localhost:4000/api/version/getversion"
      );
      setVersions(response.data);
    };

    fetchData();
  }, []);

  const deleteVersion = async (versionId) => {
    await axios
      .delete(`http://localhost:4000/api/version/deleteversion/${versionId}`)
      .then((respones) => {
        setVersions((prevVersion) =>
          prevVersion.filter((version) => version._id !== versionId)
        );
        toast.success(respones.data.msg, { position: "top-right" });
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
        Add Version
      </button>
      {isModalOpen && (
        <AddVersion
          closeModal={() => {
            setIsModalOpen(false);
          }}
        />
      )}
      <table border={0} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>Version</th>
            <th>Type</th>
            <th>Change</th>
            <th>Change Reason</th>
            <th>Created By</th>
            <th>Revision Date</th>
            <th>Approval Date</th>
            <th>Approved Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {versions.map((version, index) => {
            return (
              <tr key={version._id}>
                <td>{index + 1}</td>
                <td>{version.versionType}</td>
                <td>{version.change}</td>
                <td>{version.changeReason}</td>
                <td>{version.createdBy}</td>
                <td>{version.revisionDate}</td>
                <td>{version.approvalDate}</td>
                <td>{version.approvedBy}</td>
                <td className="actionButton">
                  <button onClick={() => deleteVersion(version._id)}>
                    <i className="fa-solid fa-trash"></i>
                  </button>
                  <Link to={"/version/editversion/" + version._id}>
                    <i className="fa-solid fa-pen-to-square"></i>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Version;
