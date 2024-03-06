import mongoose from "mongoose";

const techstackSchema = new mongoose.Schema({
  backend: {
    type: String,
    required: true,
  },
  frontend: {
    type: String,
    required: true,
  },
  mobileapp: {
    type: String,
    required: true,
  },
  database: {
    type: String,
    required: true,
  },
  infrastructure: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Techstack", techstackSchema);
