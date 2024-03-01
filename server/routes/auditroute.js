import express from "express";
import { createaudit } from "../controller/auditcontroller.js";

const route = express.Router();

route.post("/createaudit", createaudit);

export default route;
