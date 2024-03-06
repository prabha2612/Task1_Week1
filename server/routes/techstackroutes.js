import express from "express";
import { createtechstack, deletetechstack, getOnetechstack, gettechstack, updatedtechstack } from "../controller/techstackcontroller.js";

const techstackroute = express.Router();

techstackroute.post("/createtechstack", createtechstack);
techstackroute.get("/gettechstack", gettechstack);
techstackroute.get("/getonetechstack/:id", getOnetechstack);
techstackroute.patch("/updatetechstack/:id", updatedtechstack);
techstackroute.delete("/deletetechstack/:id", deletetechstack);
// scoperoute.post("/downloadbudgetpdf",downlaodtechstack);

export default techstackroute;
