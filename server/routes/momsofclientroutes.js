import express from "express";
import {
  createMOM,
  getMOMs,
  getMOMById,
  updateMOM,
  deleteMOM,
} from "../controller/mopmsofclientcontroller.js";

const momRoute = express.Router();

momRoute.post("/createmom", createMOM);
momRoute.get("/getmoms", getMOMs);
momRoute.get("/getonemom/:id", getMOMById);
momRoute.patch("/updatemom/:id", updateMOM);
// momRoute.delete("/deletemom/:id", deleteMOM);

export default momRoute;
