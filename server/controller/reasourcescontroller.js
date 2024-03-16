import Resources from "../model/resourcesModal.js";

export const createResource = async (req, res) => {
  try {
    const resourceData = new Resources(req.body);
    const savedResource = await resourceData.save();
    res.status(201).json(savedResource);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getResources = async (req, res) => {
  try {
    const resources = await Resources.find();
    res.status(200).json(resources);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getResourceById = async (req, res) => {
  try {
    const resource = await Resources.findById(req.params.id);
    if (!resource) {
      return res.status(404).json({ msg: "Resource not found" });
    }
    res.status(200).json(resource);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateResource = async (req, res) => {
  try {
    const updatedResource = await Resources.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedResource) {
      return res.status(404).json({ msg: "Resource not found" });
    }
    res.status(200).json(updatedResource);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteResource = async (req, res) => {
  try {
    const deletedResource = await Resources.findByIdAndDelete(req.params.id);
    if (!deletedResource) {
      return res.status(404).json({ msg: "Resource not found" });
    }
    res.status(200).json({ msg: "Resource deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
