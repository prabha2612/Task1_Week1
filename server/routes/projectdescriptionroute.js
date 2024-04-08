import express from "express";
import {
  createdescription,
  deletedescription,
  getOnedescription,
  getdescription,
  updateddescription,
} from "../controller/projectdescripcontroller.js";

const descriptionroute = express.Router();

descriptionroute.post("/descriptions", createdescription);
descriptionroute.get("/descriptions", getdescription);
descriptionroute.get("/descriptions/:id", getOnedescription);
descriptionroute.patch("/descriptions/:id", updateddescription);
descriptionroute.delete("/descriptions/:id", deletedescription);
// descriptionroute.post("/downloadbudgetpdf",downlaoddescription);

export default descriptionroute;
