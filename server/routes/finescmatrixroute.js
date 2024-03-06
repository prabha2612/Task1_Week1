import express from "express";
import {
  createfinescmatrix,
  deletefinescmatrix,
  getOnefinescmatrix,
  getfinescmatrix,
  updatedfinescmatrix,
} from "../controller/finescMatrixcontroller.js";

const finescmatrixroute = express.Router();

finescmatrixroute.post("/createfinescmatrix", createfinescmatrix);
finescmatrixroute.get("/getfinescmatrix", getfinescmatrix);
finescmatrixroute.get("/getonefinescmatrix/:id", getOnefinescmatrix);
finescmatrixroute.patch("/updatfinpescmatrix/:id", updatedfinescmatrix);
finescmatrixroute.delete("/deletefinescmatrix/:id", deletefinescmatrix);
// scoperoute.post("/downloadbudgetpdf",downlaodopescmatrix);

export default finescmatrixroute;
