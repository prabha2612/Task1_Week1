import mongoose from "mongoose";

const phaseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  completionDate: {
    type: String,
    required: true,
  },
  approvalDate: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  revisedCompletionDate: {
    type: String,
    required: true,
  },
  comments: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Phases", phaseSchema);
