import express from "express";
import {
  createResource,
  getResourceById,
  getResources,
  updateResource,
  deleteResource,
} from "../controller/reasourcescontroller.js";

const resourceroute = express.Router();

resourceroute.post("/createresource", createResource);
resourceroute.get("/getresource", getResources);
resourceroute.get("/getoneresource/:id", getResourceById);
resourceroute.patch("/updateresource/:id", updateResource);
resourceroute.delete("/deleteresource/:id", deleteResource);
// resourceroute.post("/downloadresourcepdf", downlaodbudget);

export default resourceroute;
