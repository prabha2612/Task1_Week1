import ProjectUpdates from "../model/projectUpdatesModal.js";

export const createProjectUpdate = async (req, res) => {
  try {
    const projectUpdateData = new ProjectUpdates(req.body);
    const savedProjectUpdate = await projectUpdateData.save();
    res.status(201).json(savedProjectUpdate);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getProjectUpdates = async (req, res) => {
  try {
    const projectUpdates = await ProjectUpdates.find();
    res.status(200).json(projectUpdates);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getProjectUpdateById = async (req, res) => {
  try {
    const projectUpdate = await ProjectUpdates.findById(req.params.id);
    if (!projectUpdate) {
      return res.status(404).json({ msg: "Project update not found" });
    }
    res.status(200).json(projectUpdate);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateProjectUpdate = async (req, res) => {
  try {
    const updatedProjectUpdate = await ProjectUpdates.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedProjectUpdate) {
      return res.status(404).json({ msg: "Project update not found" });
    }
    res.status(200).json(updatedProjectUpdate);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteProjectUpdate = async (req, res) => {
  try {
    const deletedProjectUpdate = await ProjectUpdates.findByIdAndDelete(
      req.params.id
    );
    if (!deletedProjectUpdate) {
      return res.status(404).json({ msg: "Project update not found" });
    }
    res.status(200).json({ msg: "Project update deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
