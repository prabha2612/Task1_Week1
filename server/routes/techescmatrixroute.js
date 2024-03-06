import express from "express";
import {
  createtechescmatrix,
  deletetechescmatrix,
  getOnetechescmatrix,
  gettechescmatrix,
  updatedtechescmatrix,
} from "../controller/techescMatrixcontroller.js";

const techescmatrixroute = express.Router();

techescmatrixroute.post("/createtechescmatrix", createtechescmatrix);
techescmatrixroute.get("/gettechescmatrix", gettechescmatrix);
techescmatrixroute.get("/getonetechescmatrix/:id", getOnetechescmatrix);
techescmatrixroute.patch("/updattechpescmatrix/:id", updatedtechescmatrix);
techescmatrixroute.delete("/deletetechescmatrix/:id", deletetechescmatrix);
// scoperoute.post("/downloadbudgetpdf",downlaodtechescmatrix);

export default techescmatrixroute;
