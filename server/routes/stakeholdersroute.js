import express from "express";
import { createstakeholder, deletestakeholder, getOnestakeholder, getstakeholder, updatedstakeholder } from "../controller/stakeholdercontroller.js";

const stakeholdersroute = express.Router();

stakeholdersroute.post("/createstakeholders", createstakeholder);
stakeholdersroute.get("/getstakeholders", getstakeholder);
stakeholdersroute.get("/getonestakeholders/:id", getOnestakeholder);
stakeholdersroute.patch("/updatestakeholders/:id", updatedstakeholder);
stakeholdersroute.delete("/deletestakeholders/:id", deletestakeholder);
// scoperoute.post("/downloadbudgetpdf",downlaodscope);

export default stakeholdersroute;
