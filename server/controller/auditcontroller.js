import Audit from "../model/auditModel.js";

export const createaudit = async (req, res) => {
  try {
    const auditData = new Audit(req.body);
    if (!auditData) {
      return res.status(404).json({ msg: "Data not found!" });
    }
    const savedAudit = await auditData.save();
    res.status(200).json({ msg: "User saved successfully" });
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};

export const getaudit = async (req, res) => {
  try {
    const auditData = await Audit.find();
    if (!auditData) {
      return res.status(404).json({ msg: "User data npt found" });
    }
    res.status(200).json(auditData);
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};

export const getOneaudit = async (req, res) => {
  try {
    const id = req.params.id;
    const auditExist = await Audit.findById(id);
    if (!auditExist) {
      return res.status(404).json({ msg: "Audit not found" });
    }
    res.status(200).jason(auditExist);
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};

export const updateaudit = async (req, res) => {
  try {
    const id = req.params.id;
    const auditExist = await Audit.findById(id);
    if (!auditExist) {
      return res.status(404).json({ msg: "Audit not found" });
    }
    const updatedAudit = await Audit.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({ msg: "Audit Updated!" });
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};

export const deleteaudit = async (req, res) => {
  try {
    const id = req.params.id;
    const auditExist = await Audit.findById(id);
    if (!auditExist) {
      return res.status(404).json({ msg: "Audit not found!" });
    }
    await Audit.findByIdAndDelete(id);
    res.status(200).json({ msg: "Audit deleted!" });
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};
