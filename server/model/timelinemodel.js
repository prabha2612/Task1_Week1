import mongoose from "mongoose";

const timelineSchema = new mongoose.Schema({
detailedTimeline: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Timeline", timelineSchema);
