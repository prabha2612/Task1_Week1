import express from "express";
import {
  createscope,
  deletescope,
  getOnescope,
  getscope,
  updatedscope,
} from "../controller/scopecontroller.js";

const scoperoute = express.Router();

scoperoute.post("/scope", createscope);
scoperoute.get("/scope", getscope);
scoperoute.get("/scope/:id", getOnescope);
scoperoute.patch("/scope/:id", updatedscope);
scoperoute.delete("/scope/:id", deletescope);
// scoperoute.post("/downloadbudgetpdf",downlaodscope);

export default scoperoute;
