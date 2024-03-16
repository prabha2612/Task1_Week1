import MOMofclient from "../model/momsModal.js";

export const createMOM = async (req, res) => {
  try {
    const momData = new MOMofclient(req.body);
    const savedMOM = await momData.save();
    res.status(201).json(savedMOM);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getMOMs = async (req, res) => {
  try {
    const moms = await MOMofclient.find();
    res.status(200).json(moms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getMOMById = async (req, res) => {
  try {
    const mom = await MOMofclient.findById(req.params.id);
    if (!mom) {
      return res.status(404).json({ msg: "MOM not found" });
    }
    res.status(200).json(mom);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateMOM = async (req, res) => {
  try {
    const updatedMOM = await MOMofclient.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedMOM) {
      return res.status(404).json({ msg: "MOM not found" });
    }
    res.status(200).json(updatedMOM);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteMOM = async (req, res) => {
  try {
    const deletedMOM = await MOMofclient.findByIdAndDelete(req.params.id);
    if (!deletedMOM) {
      return res.status(404).json({ msg: "MOM not found" });
    }
    res.status(200).json({ msg: "MOM deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
