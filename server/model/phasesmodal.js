import mongoose from "mongoose";

const phaseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  completionDate: {
    type: Date,
    required: true,
  },
  approvalDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  revisedCompletionDate: {
    type: Date,
    required: true,
  },
  comments: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Phases", phaseSchema);
