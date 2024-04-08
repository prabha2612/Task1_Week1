import express from "express";
import {
  createversion,
  deleteversion,
  getOneversion,
  getversion,
  updatedversion,
} from "../controller/versioncontroller.js";

const versionroute = express.Router();

versionroute.post("/versions", createversion);
versionroute.get("/versions", getversion);
versionroute.get("/versions/:id", getOneversion);
versionroute.patch("/versions/:id", updatedversion);
versionroute.delete("/versions/:id", deleteversion);
// versionroute.post("/downloadbudgetpdf",downlaodversion);

export default versionroute;
