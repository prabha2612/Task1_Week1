import express from "express";
import {
  createClientFeedback,
  getClientFeedbacks,
  getClientFeedbackById,
  updateClientFeedback,
  deleteClientFeedback,
} from "../controller/clientFeedbackcontroller.js";

const clientFeedbackRoute = express.Router();

clientFeedbackRoute.post("/clientfeedbacks", createClientFeedback);
clientFeedbackRoute.get("/clientfeedbacks", getClientFeedbacks);
clientFeedbackRoute.get("/clientfeedbacks/:id", getClientFeedbackById);
clientFeedbackRoute.patch("/clientfeedbacks/:id", updateClientFeedback);
clientFeedbackRoute.delete("/clientfeedbacks/:id", deleteClientFeedback);

export default clientFeedbackRoute;
