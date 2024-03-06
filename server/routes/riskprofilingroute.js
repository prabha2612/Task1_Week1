import express from "express";
import { createriskprofile, deleteriskprofile, getOneriskprofile, getriskprofile, updatedriskprofile } from "../controller/riskprofilingcontroller.js";

const riskprofileroute = express.Router();

riskprofileroute.post("/createriskprofile", createriskprofile);
riskprofileroute.get("/getriskprofile", getriskprofile);
riskprofileroute.get("/getoneriskprofile/:id", getOneriskprofile);
riskprofileroute.patch("/updateriskprofile/:id", updatedriskprofile);
riskprofileroute.delete("/deleteriskprofile/:id", deleteriskprofile);
// scoperoute.post("/downloadbudgetpdf",downlaodscope);

export default riskprofileroute;
