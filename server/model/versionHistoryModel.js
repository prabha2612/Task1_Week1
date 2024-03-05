import mongoose from "mongoose";

const versionSchema = new mongoose.Schema({
  versionType: {
    type: String,
    required: true,
  },
  change: {
    type: String,
    required: true,
  },
  changeReason: {
    type: String,
    required: true,
  },
  createdBy: {
    type: String,
    required: true,
  },
  revisionDate: {
    type: String,
    required: true,
  },
  approvalDate: {
    type: String,
    required: true,
  },
  approvedBy: {
    type: String,
    required: true,
  },
});

export default mongoose.model("VersionHistory", versionSchema);
