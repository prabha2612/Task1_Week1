import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const EditMOM = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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
          `http://localhost:4000/api/moms/getonemom/${id}`
        );
        setMOMData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setMOMData({ ...momData, [name]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.patch(
        `http://localhost:4000/api/moms/updatemom/${id}`,
        momData
      );
      toast.success(response.data.msg, { position: "top-right" });
      navigate("/"); // Navigate back to the home page after successful submission
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="editMOM">
      <h3>Edit MOM</h3>
      <Link to="/moms">Back</Link>
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
    </div>
  );
};

export default EditMOM;
