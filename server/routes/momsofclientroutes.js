import express from "express";
import {
  createMOM,
  getMOMs,
  getMOMById,
  updateMOM,
  deleteMOM,
} from "../controller/mopmsofclientcontroller.js";

const momRoute = express.Router();

momRoute.post("/moms", createMOM);
momRoute.get("/moms", getMOMs);
momRoute.get("/moms/:id", getMOMById);
momRoute.patch("/moms/:id", updateMOM);
// momRoute.delete("/moms/:id", deleteMOM);

export default momRoute;
