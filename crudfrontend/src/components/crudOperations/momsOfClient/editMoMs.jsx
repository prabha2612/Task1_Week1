import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "../styling/addmodal.css"

const EditMOM = ({ momId, closeModal }) => {
  const [momData, setMOMData] = useState({
    Date: "",
    Duration: "",
    momLink: "",
    comments: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/moms/${momId}`
        );
        setMOMData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [momId]);

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setMOMData({ ...momData, [name]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.patch(
        `http://localhost:4000/api/moms/${momId}`,
        momData
      );
      toast.success(response.data.msg, { position: "top-right" });
      closeModal();
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
          <p className="modal-card-title">Edit MoM</p>
        </header>
        <section className="modal-card-body">
          <form onSubmit={submitHandler}>
            <div className="inputgroup">
              <label htmlFor="Date">Date:</label>
              <input
                type="date"
                id="Date"
                name="Date"
                value={momData.Date}
                onChange={inputHandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="Duration">Duration:</label>
              <input
                type="text"
                id="Duration"
                name="Duration"
                value={momData.Duration}
                onChange={inputHandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="momLink">MOM Link:</label>
              <input
                type="text"
                id="momLink"
                name="momLink"
                value={momData.momLink}
                onChange={inputHandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="comments">Comments:</label>
              <input
                type="text"
                id="comments"
                name="comments"
                value={momData.comments}
                onChange={inputHandler}
              />
            </div>
            <div className="inputgroup">
              <button type="submit">Update MOM</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default EditMOM;
