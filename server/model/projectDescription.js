import mongoose from "mongoose";

const projdescripSchema = new mongoose.Schema({
  projectDescription: {
    type: String,
    required: true,
  }
});

export default mongoose.model("ProjectDescription", projdescripSchema);
