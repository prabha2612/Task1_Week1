import express from "express";
import {
  createProject,
  getProjectById,
  getProjects,
  updateProject,
  deleteProject,
} from "../controller/projectscontroller.js";

const projectroute = express.Router();

projectroute.post("/createproject", createProject);
projectroute.get("/getproject", getProjects);
projectroute.get("/getoneproject/:id", getProjectById);
projectroute.patch("/updateproject/:id", updateProject);
projectroute.delete("/deleteproject/:id", deleteProject);
// projectroute.post("/downloadresourcepdf", downlaodbudget);

export default projectroute;
