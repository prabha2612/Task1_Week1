import express from "express";
import { createtimeline, deletetimeline, getOnetimeline, gettimeline, updatedtimeline } from "../controller/timelinecontroller.js";

const timelineroute = express.Router();

timelineroute.post("/timeline", createtimeline);
timelineroute.get("/timeline", gettimeline);
timelineroute.get("/timeline/:id", getOnetimeline);
timelineroute.patch("/timeline/:id", updatedtimeline);
timelineroute.delete("/timeline/:id", deletetimeline);

export default timelineroute;
