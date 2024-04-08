import React, { useState } from "react";
import axios from "axios";
import "../styling/addmodal.css";
import toast from "react-hot-toast";

const AddTimelineModal = ({ closeModal }) => {
  const [timeline, setTimeline] = useState({
    detailedTimeline: "",
  });

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setTimeline({ ...timeline, [name]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/timeline", timeline);
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
          <p className="modal-card-title">New Timeline Entry</p>
        </header>
        <section className="modal-card-body">
          <form onSubmit={submitHandler}>
            <div className="inputgroup">
              <label htmlFor="detailedTimeline">Detailed Timeline: </label>
              <textarea
                id="detailedTimeline"
                name="detailedTimeline"
                autoComplete="off"
                placeholder="Enter detailed timeline..."
                onChange={inputHandler}
              />
            </div>
            <div className="inputgroup">
              <button type="submit">Add Timeline Entry</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AddTimelineModal;
