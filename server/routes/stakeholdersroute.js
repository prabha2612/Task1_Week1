import express from "express";
import {
  createstakeholder,
  deletestakeholder,
  getOnestakeholder,
  getstakeholder,
  updatedstakeholder,
} from "../controller/stakeholdercontroller.js";

const stakeholdersroute = express.Router();

stakeholdersroute.post("/stakeholders", createstakeholder);
stakeholdersroute.get("/stakeholders", getstakeholder);
stakeholdersroute.get("/stakeholders/:id", getOnestakeholder);
stakeholdersroute.patch("/stakeholders/:id", updatedstakeholder);
stakeholdersroute.delete("/stakeholders/:id", deletestakeholder);
// scoperoute.post("/downloadbudgetpdf",downlaodscope);

export default stakeholdersroute;
