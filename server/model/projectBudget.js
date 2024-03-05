import mongoose from "mongoose";

const pbSchema = new mongoose.Schema({
  projecttype: {
    type: String,
    required: true,
  },
  Duration: {
    type: Number,
    required: true,
  },
  budgetedhours: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("ProjectBudget", pbSchema);
