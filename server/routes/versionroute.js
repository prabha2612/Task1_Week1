import express from "express";
import { createversion, deleteversion, getOneversion, getversion, updatedversion } from "../controller/versioncontroller.js";

const versionroute = express.Router();

versionroute.post("/createversion", createversion);
versionroute.get("/getversion", getversion);
versionroute.get("/getoneversion/:id", getOneversion);
versionroute.patch("/updateversion/:id", updatedversion);
versionroute.delete("/deleteversion/:id", deleteversion);
// versionroute.post("/downloadbudgetpdf",downlaodversion);

export default versionroute;
