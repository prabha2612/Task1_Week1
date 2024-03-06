import mongoose from "mongoose";

const sprintwiseSchema = new mongoose.Schema({
  sprint: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
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
