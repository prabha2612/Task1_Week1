import express from "express";
import { createdescription, deletedescription, getOnedescription, getdescription, updateddescription } from "../controller/projectdescripcontroller.js";

const descriptionroute = express.Router();

descriptionroute.post("/createdescription", createdescription);
descriptionroute.get("/getdescription", getdescription);
descriptionroute.get("/getonedescription/:id", getOnedescription);
descriptionroute.patch("/updatedescription/:id", updateddescription);
descriptionroute.delete("/deletedescription/:id", deletedescription);
// descriptionroute.post("/downloadbudgetpdf",downlaoddescription);

export default descriptionroute;
