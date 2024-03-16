import mongoose from "mongoose";

const resourcesSchema = new mongoose.Schema({
  resourceName: {
    type: String,
    required: true,
  },
  Role: {
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
  comment: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Resources", resourcesSchema);
