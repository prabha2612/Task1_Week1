import express from "express";
import {
  createphase,
  deletephase,
  getOnephase,
  getphase,
  updatedphase,
} from "../controller/phasescontroller.js";

const phaseroute = express.Router();

phaseroute.post("/createphase", createphase);
phaseroute.get("/getphase", getphase);
phaseroute.get("/getonephase/:id", getOnephase);
phaseroute.patch("/updatephase/:id", updatedphase);
phaseroute.delete("/deletephase/:id", deletephase);
// sprintroute.post("/downloadbudgetpdf",downlaodphase);

export default phaseroute;
