import mongoose from "mongoose";
import Audit from "./auditModel.js";
import projectBudget from "./projectBudget.js";
import projectDescription from "./projectDescription.js";
import projectScope from "./ScopeModel.js";
import Techstack from "./techstackModel.js";
import OpescMatrix from "./opescmatrix.js";
import FinescMatrix from "./finescMatrix.js";
import TechescMatrix from "./techescMatrix.js";
import Riskprofiling from "./riskprofiling.js";
import Phases from "./phasesmodal.js";
import SprintWise from "./sprintwisemodel.js";
import versionHistory from "./versionHistoryModel.js";
import Timeline from "./timelinemodel.js";
import Resources from "./resourcesModal.js";
import Clientfeedback from "./clientFeedbackModal.js";
import ProjectUpdates from "./projectUpdatesModal.js";
import MOMofclient from "./momsModal.js";
import Stakeholders from "./stakeholdersmodel.js";

const projectSchema = new mongoose.Schema({
  ProjectId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  projectName: {
    type: String,
    required: true,
  },
  auditHistory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Audit, // Reference to the Audit model
    required: true,
  },
  projectBudget: {
    type: mongoose.Schema.Types.ObjectId,
    ref: projectBudget, // Reference to the projectBudget model
    required: true,
  },
  versionHistory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: versionHistory, // Reference to the versionHistory model
    required: true,
  },
  projectDescription: {
    type: mongoose.Schema.Types.ObjectId,
    ref: projectDescription, // Reference to the projectDescription model
    required: true,
  },
  scope: {
    type: mongoose.Schema.Types.ObjectId,
    ref: projectScope, // Reference to the projectScope model
    required: true,
  },
  projectStack: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Techstack, // Reference to the Techstack model
    required: true,
  },
  OperationalMatrix: {
    type: mongoose.Schema.Types.ObjectId,
    ref: OpescMatrix, // Reference to the OpescMatrix model
    required: true,
  },
  financialmatrix: {
    type: mongoose.Schema.Types.ObjectId,
    ref: FinescMatrix, // Reference to the FinescMatrix model
    required: true,
  },
  technicalMatrix: {
    type: mongoose.Schema.Types.ObjectId,
    ref: TechescMatrix, // Reference to the TechescMatrix model
    required: true,
  },
  stakeHolders: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Stakeholders, // Reference to the Stakeholders model
    required: true,
  },
  riskProfiling: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Riskprofiling, // Reference to the Riskprofiling model
    required: true,
  },
  phases: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Phases, // Reference to the Phases model
    required: true,
  },
  sprintDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: SprintWise, // Reference to the SprintWise model
    required: true,
  },
  timelineReference: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Timeline, // Reference to the Timeline model
    required: true,
  },
  Resources: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Resources, // Reference to the Resources model
    required: true,
  },
  clientFeedback: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Clientfeedback, // Reference to the Clientfeedback model
    required: true,
  },
  projectUpdates: {
    type: mongoose.Schema.Types.ObjectId,
    ref: ProjectUpdates, // Reference to the ProjectUpdates model
    required: true,
  },
  moms: {
    type: mongoose.Schema.Types.ObjectId,
    ref: MOMofclient, // Reference to the MOMofclient model
    required: true,
  },
});

export default mongoose.model("Projects", projectSchema);
