import React, { useEffect, useState } from "react";
import "./audit.css";
import axios from "axios";
import AddAuditModal from "../add/addaudit.jsx";
import EditAuditModal from "../update/editAudit.jsx";

const Audit = () => {
  const [audits, setaudits] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAudit, setSelectedAudit] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:4000/api/audits");
      setaudits(response.data);
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
        Add audit
      </button>
      {isModalOpen && (
        <AddAuditModal
          closeModal={() => {
            setIsModalOpen(false);
          }}
        />
      )}
      <table border={0} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date of Audit </th>
            <th>Reviewed By</th>
            <th>Status</th>
            <th>Reviewed Section</th>
            <th>Comments/Queries</th>
            <th>Action Items</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {audits.map((audit, index) => {
            return (
              <tr key={audit._id}>
                <td>{index + 1}</td>
                <td>{audit.auditDate}</td>
                <td>{audit.reviewedby}</td>
                <td>{audit.status}</td>
                <td>{audit.reviewedsection}</td>
                <td>{audit.comments}</td>
                <td>{audit.actionitem}</td>
                <td className="actionButton">
                  <button
                    onClick={() => {
                      setIsModalOpen(true);
                      setSelectedAudit(audit._id);
                    }}
                    className="addButton"
                  >
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                  {isModalOpen && (
                    <EditAuditModal
                      auditId={selectedAudit}
                      closeModal={() => setIsModalOpen(false)}
                    />
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Audit;
