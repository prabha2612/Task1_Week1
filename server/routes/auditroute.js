import express from "express";
import { createaudit, downlaod, getOneaudit, getaudit, updateaudit } from "../controller/auditcontroller.js";

const auditroute = express.Router();

auditroute.post("/createaudit", createaudit);
auditroute.get("/getaudit", getaudit);
auditroute.get("/getoneaudit/:id", getOneaudit);
auditroute.patch("/updateaudit/:id", updateaudit);
// auditroute.delete("/deleteaudit/:id", deleteaudit);
auditroute.post("/downloadpdf",downlaod);

export default auditroute;