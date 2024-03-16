import express from "express";
import {
  createProjectUpdate,
  deleteProjectUpdate,
  getProjectUpdateById,
  getProjectUpdates,
  updateProjectUpdate,
} from "../controller/projectupdatescontroller.js";

const projectUpdateRoute = express.Router();

projectUpdateRoute.post("/createprojectupdate", createProjectUpdate);
projectUpdateRoute.get("/getprojectupdates", getProjectUpdates);
projectUpdateRoute.get("/getoneprojectupdate/:id", getProjectUpdateById);
projectUpdateRoute.patch("/updateprojectupdate/:id", updateProjectUpdate);
projectUpdateRoute.delete("/deleteprojectupdate/:id", deleteProjectUpdate);

export default projectUpdateRoute;
