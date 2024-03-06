import express from "express";
import { createsprint, deletesprint, getOnesprint, getsprint, updatedsprint } from "../controller/sprintwisecontroller.js";

const sprintroute = express.Router();

sprintroute.post("/createsprint", createsprint);
sprintroute.get("/getsprint", getsprint);
sprintroute.get("/getonesprint/:id", getOnesprint);
sprintroute.patch("/updatesprint/:id", updatedsprint);
sprintroute.delete("/deletesprint/:id", deletesprint);
// sprintroute.post("/downloadbudgetpdf",downlaodsprint);

export default sprintroute;
