import express from "express";
import {
  createtechstack,
  deletetechstack,
  getOnetechstack,
  gettechstack,
  updatedtechstack,
} from "../controller/techstackcontroller.js";

const techstackroute = express.Router();

techstackroute.post("/techstack", createtechstack);
techstackroute.get("/techstack", gettechstack);
techstackroute.get("/techstack/:id", getOnetechstack);
techstackroute.patch("/techstack/:id", updatedtechstack);
techstackroute.delete("/techstack/:id", deletetechstack);

export default techstackroute;
