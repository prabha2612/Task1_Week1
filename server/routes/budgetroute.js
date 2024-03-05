import express from "express";
import { createbudget, deletebudget, downlaodbudget, getOnebudget, getbudget, updatedbudget } from "../controller/projectbudgetcontroller.js";

const budgetroute = express.Router();

budgetroute.post("/createbudget", createbudget);
budgetroute.get("/getbudget", getbudget);
budgetroute.get("/getonebudget/:id", getOnebudget);
budgetroute.patch("/updatebudget/:id", updatedbudget);
budgetroute.delete("/deletebudget/:id", deletebudget);
budgetroute.post("/downloadbudgetpdf",downlaodbudget);

export default budgetroute;
