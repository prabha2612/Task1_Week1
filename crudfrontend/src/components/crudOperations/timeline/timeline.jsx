import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import AddTimelineModal from "./addTimeline";
import EditTimelineModal from "./editTimeline";

const Timelines = () => {
  const [timelines, setTimelines] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTimelineId, setSelectedTimelineId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/timeline"
        );
        setTimelines(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const deleteTimeline = async (timelineId) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/api/timeline/deletetimeline/${timelineId}`
      );
      setTimelines((prevTimelines) =>
        prevTimelines.filter((timeline) => timeline._id !== timelineId)
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
        Add Timeline
      </button>
      {isModalOpen && (
        <AddTimelineModal closeModal={() => setIsModalOpen(false)} />
      )}
      <table border={0} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Detailed Timeline</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {timelines.map((timeline, index) => (
            <tr key={timeline._id}>
              <td>{index + 1}</td>
              <td>{timeline.detailedTimeline}</td>
              <td className="actionButton">
                <button onClick={() => deleteTimeline(timeline._id)}>
                  <i className="fa-solid fa-trash"></i>
                </button>
                <button
                  onClick={() => {
                    setIsModalOpen(true);
                    setSelectedTimelineId(timeline._id);
                  }}
                  className="addButton"
                >
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
                {isModalOpen && (
                  <EditTimelineModal
                    timelineId={selectedTimelineId}
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

export default Timelines;
