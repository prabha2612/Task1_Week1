import express from "express";
import {
  createphase,
  deletephase,
  getOnephase,
  getphase,
  updatedphase,
} from "../controller/phasescontroller.js";

const phaseroute = express.Router();

phaseroute.post("/phases", createphase);
phaseroute.get("/phases", getphase);
phaseroute.get("/phases/:id", getOnephase);
phaseroute.patch("/phases/:id", updatedphase);
phaseroute.delete("/phases/:id", deletephase);
// sprintroute.post("/downloadbudgetpdf",downlaodphase);

export default phaseroute;
