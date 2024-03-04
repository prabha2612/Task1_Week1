import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import nodemailer from "nodemailer";
import puppeteer from "puppeteer";
import route from "./routes/auditroute.js";


const app = express();
app.use(express.json());
app.use(cors());

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

app.use("/api", route);

//Hello, 
// I have completed implementing download and email notification features for the CRUD operations but I still have a few left which I'll try to complete as soon as possible but I'm not sure I'll be able to d them before deadline. I request you to kindly consider. 