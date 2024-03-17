import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const EditTimelineModal = ({ timelineId, closeModal }) => {
  const [timeline, setTimeline] = useState({
    detailedTimeline: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/timeline/getonetimeline/${timelineId}`);
        setTimeline(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [timelineId]);

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setTimeline({ ...timeline, [name]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.patch(`http://localhost:4000/api/timeline/updatetimeline/${timelineId}`, timeline);
      toast.success(response.data.msg, { position: "top-right" });
      closeModal(); // Close the modal after successful submission
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="modal-container" onClick={(e) => {
      if (e.target.className === "modal-container") closeModal();
    }}>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Edit Timeline Entry</p>
        </header>
        <section className="modal-card-body">
          <form onSubmit={submitHandler}>
            <div className="inputgroup">
              <label htmlFor="detailedTimeline">Detailed Timeline: </label>
              <textarea
                id="detailedTimeline"
                name="detailedTimeline"
                autoComplete="off"
                value={timeline.detailedTimeline}
                onChange={inputHandler}
              />
            </div>
            <div className="inputgroup">
              <button type="submit">Update Timeline Entry</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default EditTimelineModal;
