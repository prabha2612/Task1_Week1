import mongoose from "mongoose";

const projectupdatesSchema = new mongoose.Schema({
  Date: {
    type: String,
    required: true,
  },
  generalUpdates: {
    type: String,
    required: true,
  },
});

export default mongoose.model("ProjectUpdates", projectupdatesSchema);
