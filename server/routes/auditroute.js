import express from "express";
import { createaudit, downlaod, getOneaudit, getaudit, updateaudit } from "../controller/auditcontroller.js";

const route = express.Router();

route.post("/createaudit", createaudit);
route.get("/getaudit", getaudit);
route.get("/getoneaudit/:id", getOneaudit);
route.patch("/updateaudit/:id", updateaudit);
// route.delete("/deleteaudit/:id", deleteaudit);
route.post("/downloadpdf",downlaod);

export default route;
