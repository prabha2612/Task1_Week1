import express from "express";
import {
  createsprint,
  deletesprint,
  getOnesprint,
  getsprint,
  updatedsprint,
} from "../controller/sprintwisecontroller.js";

const sprintroute = express.Router();

sprintroute.post("/sprint", createsprint);
sprintroute.get("/sprint", getsprint);
sprintroute.get("/sprint/:id", getOnesprint);
sprintroute.patch("/sprint/:id", updatedsprint);
sprintroute.delete("/sprint/:id", deletesprint);

export default sprintroute;
