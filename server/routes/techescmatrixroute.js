import express from "express";
import {
  createtechescmatrix,
  deletetechescmatrix,
  getOnetechescmatrix,
  gettechescmatrix,
  updatedtechescmatrix,
} from "../controller/techescMatrixcontroller.js";

const techescmatrixroute = express.Router();

techescmatrixroute.post("/techescmatrices", createtechescmatrix);
techescmatrixroute.get("/techescmatrices", gettechescmatrix);
techescmatrixroute.get("/techescmatrices/:id", getOnetechescmatrix);
techescmatrixroute.patch("/techescmatrices/:id", updatedtechescmatrix);
techescmatrixroute.delete("/techescmatrices/:id", deletetechescmatrix);
// scoperoute.post("/downloadbudgetpdf",downlaodtechescmatrix);

export default techescmatrixroute;
