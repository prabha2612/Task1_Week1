import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
// import puppeteer from "puppeteer";
import auditroute from "./routes/auditroute.js";
import budgetroute from "./routes/budgetroute.js";
import versionroute from "./routes/versionroute.js";
import descriptionroute from "./routes/projectdescriptionroute.js";
import scoperoute from "./routes/scoperoute.js";
import techstackroute from "./routes/techstackroutes.js";
import opescmatrixroute from "./routes/opescmatrixroute.js";
import finescmatrixroute from "./routes/finescmatrixroute.js";
import techescmatrixroute from "./routes/techescmatrixroute.js";
import stakeholdersroute from "./routes/stakeholdersroute.js";
import riskprofileroute from "./routes/riskprofilingroute.js";
import sprintroute from "./routes/sprintroute.js";
import phaseroute from "./routes/phaseroute.js";
import timelineroute from "./routes/timelineroute.js";
import projectroute from "./routes/projectsroutes.js";
import resourceroute from "./routes/resourcesroutes.js";
import clientFeedbackRoute from "./routes/clientfeedbackroutes.js";
import projectUpdateRoute from "./routes/projectupdatesroutes.js";
import momRoute from "./routes/momsofclientroutes.js";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

dotenv.config();

const PORT = process.env.PORT || 3500;
const URL = process.env.MONGOURL;

mongoose
  .connect(URL)
  .then(() => {
    console.log("Connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });

app.use("/api", auditroute);
app.use("/api", budgetroute);
app.use("/api/version", versionroute);
app.use("/api/description", descriptionroute);
app.use("/api/scope", scoperoute);
app.use("/api/techstack", techstackroute);
app.use("/api", opescmatrixroute);
app.use("/api", finescmatrixroute);
app.use("/api/techescmatrix", techescmatrixroute);
app.use("/api/stakeholders", stakeholdersroute);
app.use("/api/riskprofile", riskprofileroute);
app.use("/spi/phase", phaseroute);
app.use("/api/sprintwise", sprintroute);
app.use("/api/timeline", timelineroute);
app.use("/api/projects", projectroute);
app.use("/api/resources", resourceroute);
app.use("/api", clientFeedbackRoute);
app.use("/api/projectupdates", projectUpdateRoute);
app.use("/api", momRoute);
