import mongoose from "mongoose";

const sprintwiseSchema = new mongoose.Schema({
  sprint: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  comments: {
    type: String,
    required: true,
  },
});

export default mongoose.model("SprintWise", sprintwiseSchema);
