import mongoose from "mongoose";

const auditSchema = new mongoose.Schema({
  auditDate: {
    type: Date,
    required: true,
  },
  reviewedby: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  reviewedsection: {
    type: String,
    required: true,
  },
  comments: {
    type: String,
    required: true,
  },
  actionitem: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Audit", auditSchema);
