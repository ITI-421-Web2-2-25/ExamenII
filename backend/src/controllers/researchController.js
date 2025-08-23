import research from "../models/research.js";

// Crear categoría
export const createresearch = async (req, res) => {
  try {
    const { researchID, Fullname, Email, password,schoolgrade,Description, } = req.body;
    const Image = req.file ? req.file.buffer : null;

    if (!Image) {
      return res.status(400).json({ error: "Image is required" });
    }

    const newresearch = new research({
      researchID,
      Fullname,
      Email,
      schoolgrade,
      Description,
      password,
      Mime,
      Image
    });

    await newresearch.save();
    res.status(201).json(newresearch);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Lista de categorías
export const getresearch = async (req, res) => {
  try {
    const research = await research.find();
    res.json(research);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};