import express from "express";
import {
  createClientFeedback,
  getClientFeedbacks,
  getClientFeedbackById,
  updateClientFeedback,
  deleteClientFeedback,
} from "../controller/clientFeedbackcontroller.js";

const clientFeedbackRoute = express.Router();

clientFeedbackRoute.post("/createclientfeedback", createClientFeedback);
clientFeedbackRoute.get("/getclientfeedbacks", getClientFeedbacks);
clientFeedbackRoute.get("/getoneclientfeedback/:id", getClientFeedbackById);
clientFeedbackRoute.patch("/updateclientfeedback/:id", updateClientFeedback);
clientFeedbackRoute.delete("/deleteclientfeedback/:id", deleteClientFeedback);

export default clientFeedbackRoute;
