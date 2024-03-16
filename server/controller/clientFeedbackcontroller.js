import ClientFeedback from "../model/clientFeedbackModal.js";

export const createClientFeedback = async (req, res) => {
  try {
    const clientFeedbackData = new ClientFeedback(req.body);
    const savedClientFeedback = await clientFeedbackData.save();
    res.status(201).json(savedClientFeedback);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getClientFeedbacks = async (req, res) => {
  try {
    const clientFeedbacks = await ClientFeedback.find();
    res.status(200).json(clientFeedbacks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getClientFeedbackById = async (req, res) => {
  try {
    const clientFeedback = await ClientFeedback.findById(req.params.id);
    if (!clientFeedback) {
      return res.status(404).json({ msg: "Client feedback not found" });
    }
    res.status(200).json(clientFeedback);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateClientFeedback = async (req, res) => {
  try {
    const updatedClientFeedback = await ClientFeedback.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedClientFeedback) {
      return res.status(404).json({ msg: "Client feedback not found" });
    }
    res.status(200).json(updatedClientFeedback);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteClientFeedback = async (req, res) => {
  try {
    const deletedClientFeedback = await ClientFeedback.findByIdAndDelete(
      req.params.id
    );
    if (!deletedClientFeedback) {
      return res.status(404).json({ msg: "Client feedback not found" });
    }
    res.status(200).json({ msg: "Client feedback deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
