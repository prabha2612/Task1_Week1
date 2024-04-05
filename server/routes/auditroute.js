import express from "express";
import {
  createaudit,
  downlaod,
  getOneaudit,
  getaudit,
  updateaudit,
} from "../controller/auditcontroller.js";

const auditroute = express.Router();

auditroute.post("/audits", createaudit);
auditroute.get("/audits", getaudit);
auditroute.get("/audits/:id", getOneaudit);
auditroute.patch("/audits/:id", updateaudit);
// auditroute.delete("/audits/:id", deleteaudit);
auditroute.post("/downloadpdf", downlaod);

export default auditroute;
