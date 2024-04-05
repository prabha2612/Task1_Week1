import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const AddMOMModal = ({ closeModal }) => {
  const [momData, setMomData] = useState({
    Date: "",
    Duration: "",
    momLink: "",
    comments: "",
  });

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setMomData({ ...momData, [name]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/moms",
        momData
      );
      toast.success(response.data.msg, { position: "top-right" });
      closeModal(); // Close the modal after successful submission
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
    >
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">New MOM</p>
        </header>
        <section className="modal-card-body">
          <form onSubmit={submitHandler}>
            <div className="inputgroup">
              <label htmlFor="Date">Date: </label>
              <input
                type="date"
                id="Date"
                name="Date"
                value={momData.Date}
                onChange={inputHandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="Duration">Duration: </label>
              <input
                type="text"
                id="Duration"
                name="Duration"
                autoComplete="off"
                value={momData.Duration}
                onChange={inputHandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="momLink">MOM Link: </label>
              <input
                type="text"
                id="momLink"
                name="momLink"
                autoComplete="off"
                value={momData.momLink}
                onChange={inputHandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="comments">Comments: </label>
              <input
                type="text"
                id="comments"
                name="comments"
                autoComplete="off"
                value={momData.comments}
                onChange={inputHandler}
              />
            </div>
            <div className="inputgroup">
              <button type="submit">Add MOM</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AddMOMModal;
