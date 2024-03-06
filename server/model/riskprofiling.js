import mongoose from "mongoose";

const riskprofilingSchema = new mongoose.Schema({
  riskType: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  severity: {
    type: String,
    required: true,
  },
  impact: {
    type: String,
    required: true,
  },
  remedialsteps: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  closuredate: {
    type: Date,
    required: true,
  },
});

export default mongoose.model("Riskprofiling", riskprofilingSchema);
