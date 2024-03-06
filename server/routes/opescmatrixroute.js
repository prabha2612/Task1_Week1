import express from "express";
import { createopescmatrix, deleteopescmatrix, getOneopescmatrix, getopescmatrix, updatedopescmatrix } from "../controller/opescMatrixcontroller.js";

const opescmatrixroute = express.Router();

opescmatrixroute.post("/createopescmatrix", createopescmatrix);
opescmatrixroute.get("/getopescmatrix", getopescmatrix);
opescmatrixroute.get("/getoneopescmatrix/:id", getOneopescmatrix);
opescmatrixroute.patch("/updateopescmatrix/:id", updatedopescmatrix);
opescmatrixroute.delete("/deleteopescmatrix/:id", deleteopescmatrix);
// scoperoute.post("/downloadbudgetpdf",downlaodopescmatrix);

export default opescmatrixroute;
