import mongoose from "mongoose";

const stakeholderSchema = new mongoose.Schema({
  tiltle: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Stakeholders", stakeholderSchema);
