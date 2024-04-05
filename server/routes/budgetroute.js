import express from "express";
import {
  createbudget,
  deletebudget,
  downlaodbudget,
  getOnebudget,
  getbudget,
  updatedbudget,
} from "../controller/projectbudgetcontroller.js";

const budgetroute = express.Router();

budgetroute.post("/budgets", createbudget);
budgetroute.get("/budgets", getbudget);
budgetroute.get("/budgets/:id", getOnebudget);
budgetroute.patch("/budgets/:id", updatedbudget);
budgetroute.delete("/budgets/:id", deletebudget);
budgetroute.post("/downloadbudgetpdf", downlaodbudget);

export default budgetroute;
