import mongoose from "mongoose";

const finescmatrixSchema = new mongoose.Schema({
  escalationlevel: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});

export default mongoose.model("FinescMatrix", finescmatrixSchema);
