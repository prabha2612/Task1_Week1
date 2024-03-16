import Projects from "../model/projectsModal.js";

export const createProject = async (req, res) => {
  try {
    const projectData = new Projects(req.body);
    if (!projectData) {
      return res.status(404).json({ msg: "Data not found!" });
    }
    const savedProject = await projectData.save();
    res
      .status(200)
      .json({ msg: "Project created successfully", project: savedProject });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getProjects = async (req, res) => {
  try {
    const projectData = await Projects.find();
    if (!projectData) {
      return res.status(404).json({ msg: "Data not found" });
    }
    res.status(200).json(projectData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getProjectById = async (req, res) => {
  try {
    const id = req.params.id;
    const projectData = await Projects.findById(id);
    if (!projectData) {
      return res.status(404).json({ msg: "Project not found" });
    }
    res.status(200).json(projectData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateProject = async (req, res) => {
  try {
    const id = req.params.id;
    const projectData = await Projects.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!projectData) {
      return res.status(404).json({ msg: "Project not found" });
    }
    res
      .status(200)
      .json({ msg: "Project updated successfully", project: projectData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const id = req.params.id;
    const projectData = await Projects.findByIdAndDelete(id);
    if (!projectData) {
      return res.status(404).json({ msg: "Project not found" });
    }
    res.status(200).json({ msg: "Project deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
