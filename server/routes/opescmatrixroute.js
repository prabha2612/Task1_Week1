import express from "express";
import {
  createopescmatrix,
  deleteopescmatrix,
  getOneopescmatrix,
  getopescmatrix,
  updatedopescmatrix,
} from "../controller/opescMatrixcontroller.js";

const opescmatrixroute = express.Router();

opescmatrixroute.post("/opescmatrices", createopescmatrix);
opescmatrixroute.get("/opescmatrices", getopescmatrix);
opescmatrixroute.get("/opescmatrices/:id", getOneopescmatrix);
opescmatrixroute.patch("/opescmatrices/:id", updatedopescmatrix);
opescmatrixroute.delete("/opescmatrices/:id", deleteopescmatrix);
// scoperoute.post("/downloadbudgetpdf",downlaodopescmatrix);

export default opescmatrixroute;
