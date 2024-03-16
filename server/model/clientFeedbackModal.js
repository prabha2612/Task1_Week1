import mongoose from "mongoose";

const clientFeedbackSchema = new mongoose.Schema({
  FeedbackType: {
    type: String,
    required: true,
  },
  daterecieved: {
    type: String,
    required: true,
  },
  detailedFeedback: {
    type: String,
    required: true,
  },
  actionTaken: {
    type: String,
    required: true,
  },
  closureDate: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Clientfeedback", clientFeedbackSchema);
