import express from "express";
import {
  createResource,
  getResourceById,
  getResources,
  updateResource,
  deleteResource,
} from "../controller/reasourcescontroller.js";

const resourceroute = express.Router();

resourceroute.post("/resources", createResource);
resourceroute.get("/resources", getResources);
resourceroute.get("/resources/:id", getResourceById);
resourceroute.patch("/resources/:id", updateResource);
resourceroute.delete("/resources/:id", deleteResource);
// resourceroute.post("/downloadresourcepdf", downlaodbudget);

export default resourceroute;
