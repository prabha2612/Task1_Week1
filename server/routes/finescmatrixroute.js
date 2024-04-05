import express from "express";
import {
  createfinescmatrix,
  deletefinescmatrix,
  getOnefinescmatrix,
  getfinescmatrix,
  updatedfinescmatrix,
} from "../controller/finescMatrixcontroller.js";

const finescmatrixroute = express.Router();

finescmatrixroute.post("/finescmatrices", createfinescmatrix);
finescmatrixroute.get("/finescmatrices", getfinescmatrix);
finescmatrixroute.get("/finescmatrices/:id", getOnefinescmatrix);
finescmatrixroute.patch("/finescmatrices/:id", updatedfinescmatrix);
finescmatrixroute.delete("/finescmatrices/:id", deletefinescmatrix);
// scoperoute.post("/downloadbudgetpdf",downlaodopescmatrix);

export default finescmatrixroute;
