import express from "express";
import {
  createProjectUpdate,
  deleteProjectUpdate,
  getProjectUpdateById,
  getProjectUpdates,
  updateProjectUpdate,
} from "../controller/projectupdatescontroller.js";

const projectUpdateRoute = express.Router();

projectUpdateRoute.post("/projectupdates", createProjectUpdate);
projectUpdateRoute.get("/projectupdates", getProjectUpdates);
projectUpdateRoute.get("/projectupdates/:id", getProjectUpdateById);
projectUpdateRoute.patch("/projectupdates/:id", updateProjectUpdate);
projectUpdateRoute.delete("/projectupdates/:id", deleteProjectUpdate);

export default projectUpdateRoute;
