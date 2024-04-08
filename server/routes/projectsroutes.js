import express from "express";
import {
  createProject,
  getProjectById,
  getProjects,
  updateProject,
  deleteProject,
} from "../controller/projectscontroller.js";

const projectroute = express.Router();

projectroute.post("/projects", createProject);
projectroute.get("/projects", getProjects);
projectroute.get("/projects/:id", getProjectById);
projectroute.patch("/projects/:id", updateProject);
projectroute.delete("/projects/:id", deleteProject);
// projectroute.post("/downloadresourcepdf", downlaodbudget);

export default projectroute;
