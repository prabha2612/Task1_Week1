import mongoose from "mongoose";

const scopeSchema = new mongoose.Schema({
  projectScope: {
    type: String,
    required: true,
  },
});

export default mongoose.model("projectScope", scopeSchema);
