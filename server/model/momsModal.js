import mongoose from "mongoose";

const momsSchema = new mongoose.Schema({
  Date: {
    type: String,
    required: true,
  },
  Duration: {
    type: String,
    required: true,
  },
  momLink: {
    type: String,
    required: true,
  },
  comments: {
    type: String,
    required: true,
  },
});

export default mongoose.model("MOMofclient", momsSchema);
