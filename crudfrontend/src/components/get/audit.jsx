import React, { useEffect, useState } from "react";
import "./audit.css";
import { Link } from "react-router-dom";
import axios from "axios";
import AddAuditModal from "../add/addaudit.jsx";
// import toast from "react-hot-toast";

const Audit = () => {
  const [audits, setaudits] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () =>{
    setIsModalOpen(true);
  }

  const closeModal = () =>{
    setIsModalOpen(false);
  }


  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:4000/api/audit/getaudit");
      setaudits(response.data);
    };

    fetchData();
  }, []);

  return (
    <div className="AuditHistory">
      {/* <Link to={"/add"} className="addButton">
        Add audit
      </Link> */}
       <button onClick={openModal} className="addButton">
        Add audit
      </button>
      <AddAuditModal isOpen={isModalOpen} onClose = {closeModal} />
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
                  <Link to={"/edit/" + audit._id}>
                    <i className="fa-solid fa-pen-to-square"></i>
                  </Link>
                </td>
              </tr>
            );
          })
          }
        </tbody>
      </table>
    </div>
  );
};

export default Audit;
