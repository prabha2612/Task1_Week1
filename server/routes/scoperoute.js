import express from "express";
import { createscope, deletescope, getOnescope, getscope, updatedscope } from "../controller/scopecontroller.js";

const scoperoute = express.Router();

scoperoute.post("/createscope", createscope);
scoperoute.get("/getscope", getscope);
scoperoute.get("/getonescope/:id", getOnescope);
scoperoute.patch("/updatescope/:id", updatedscope);
scoperoute.delete("/deletescope/:id", deletescope);
// scoperoute.post("/downloadbudgetpdf",downlaodscope);

export default scoperoute;
