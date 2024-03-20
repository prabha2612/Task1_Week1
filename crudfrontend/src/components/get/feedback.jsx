import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AddClientFeedbackModal from "../add/addfeedback";

const ClientFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/clientfeedback/getclientfeedbacks"
        );
        setFeedbacks(response.data);
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
        Add Client Feedback
      </button>
      {isModalOpen && (
        <AddClientFeedbackModal closeModal={() => setIsModalOpen(false)} />
      )}
      <table border={0} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Feedback Type</th>
            <th>Date Received</th>
            <th>Detailed Feedback</th>
            <th>Action Taken</th>
            <th>Closure Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.map((feedback, index) => (
            <tr key={feedback._id}>
              <td>{index + 1}</td>
              <td>{feedback.FeedbackType}</td>
              <td>{feedback.daterecieved}</td>
              <td>{feedback.detailedFeedback}</td>
              <td>{feedback.actionTaken}</td>
              <td>{feedback.closureDate}</td>
              <td className="actionButton">
                <Link to={`/clientfeedback/editclientfeedback/${feedback._id}`}>
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

export default ClientFeedback;
