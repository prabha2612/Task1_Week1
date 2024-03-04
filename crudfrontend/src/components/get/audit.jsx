import React, { useEffect, useState } from "react";
import "./audit.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Audit = () => {
  const [audits, setaudits] = useState();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get("/get api/");
  //     setaudits(response.data);
  // //   };

  //   fetchData();
  // }, []);

  return (
    <div className="AuditHistory">
      <Link to={"/add"} className="addButton">
        Add audit
      </Link>
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
                <td>{audit._id}</td>
                <td>{audit.date}</td>
                <td>{audit.reviewer}</td>
                <td>{audit.status}</td>
                <td>{audit.section}</td>
                <td>{audit.comments}</td>
                <td>{audit.actionItems}</td>
                <td className="actionButton">
                  <Link to={"/edit/" + audit._id}>
                    <i class="fa-solid fa-pen-to-square"></i>
                  </Link>
                </td>
              </tr>
            );
          })}
          <tr>
            <td>1</td>
            <td>2020-01-01</td>
            <td>Promact</td>
            <td>Pending</td>
            <td>Section 1</td>
            <td>Comments</td>
            <td>Action Items</td>
            <td className="actionButton">
              {/* <button>Delete</button> */}
              <Link to={"/edit"}>
                <i class="fa-solid fa-pen-to-square"></i>
              </Link>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>2020-01-01</td>
            <td>Promact</td>
            <td>Pending</td>
            <td>Section 1</td>
            <td>Comments</td>
            <td>Action Items</td>
            <td className="actionButton">
              {/* <button>Delete</button> */}
              <Link to={"/edit"}>
                <i class="fa-solid fa-pen-to-square"></i>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Audit;
