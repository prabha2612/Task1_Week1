import express from "express";
import {
  createriskprofile,
  deleteriskprofile,
  getOneriskprofile,
  getriskprofile,
  updatedriskprofile,
} from "../controller/riskprofilingcontroller.js";

const riskprofileroute = express.Router();

riskprofileroute.post("/riskprofiles", createriskprofile);
riskprofileroute.get("/riskprofiles", getriskprofile);
riskprofileroute.get("/riskprofiles/:id", getOneriskprofile);
riskprofileroute.patch("/riskprofiles/:id", updatedriskprofile);
riskprofileroute.delete("/riskprofiles/:id", deleteriskprofile);
// scoperoute.post("/downloadbudgetpdf",downlaodscope);

export default riskprofileroute;
