import Investigation from "../models/investigation.js";

// Create investigation
export const createInvestigation = async (req, res) => {
  try {
    const { InvestigationID, InvestigationTitle, Area, Description, DocumentMime, Conclusions, Recomendations, Research } = req.body;
    const Document = req.file ? req.file.buffer : null;

    if (!Document) {
      return res.status(400).json({ error: "Document is required" });
    }

    const newInvestigation = new Investigation({
      InvestigationID,
      InvestigationTitle,
      Area,
      Description,
      Document,
      DocumentMime,
      Conclusions, 
      Recomendations,
      Research
    });

    await newInvestigation.save();
    res.status(201).json(newInvestigation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Lista de investigaciones
export const getInvestigation = async (req, res) => {
  try {
    const investigations = await Investigation.find()
      .populate("Estudiante", "Fullname Email");;
    res.json(investigations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};