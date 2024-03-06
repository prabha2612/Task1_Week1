import express from "express";
import { createtimeline, deletetimeline, getOnetimeline, gettimeline, updatedtimeline } from "../controller/timelinecontroller.js";

const timelineroute = express.Router();

timelineroute.post("/createtimeline", createtimeline);
timelineroute.get("/gettimeline", gettimeline);
timelineroute.get("/getonetimeline/:id", getOnetimeline);
timelineroute.patch("/updatetimeline/:id", updatedtimeline);
timelineroute.delete("/deletetimeline/:id", deletetimeline);
// sprintroute.post("/downloadbudgetpdf",downlaodsprint);

export default timelineroute;
