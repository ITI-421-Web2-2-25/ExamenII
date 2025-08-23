import Investigation from "../models/investigation.js";

// Create investigation
export const createInvestigation = async (req, res) => {
  try {
    const { InvestigationID, InvestigationTitle, Area, Description, DocumentMime, Conclusions, Recomendations, ResearchID } = req.body;
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
      ResearchID
    });

    await newInvestigation.save();
    res.status(201).json(newInvestigation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Agrega comentarios
export const addComment = async (req, res) => {
  try {
    const { CommentDetail, Valoration, Date } = req.body;

    const investigation = await Investigation.findById(req.params.id);

    if (!investigation) {
      return res.status(404).json({ error: "Investigación no encontrada" });
    }

    investigation.Comments.push({
      CommentDetail,
      Valoration,
      Date
    });

    await investigation.save();

    res.status(201).json(investigation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Agregar imagenes
export const addImage = async (req, res) => {
  try {
    const { Mime, ImageDescription } = req.body;
    const Image = req.file ? req.file.buffer : null;

    if (!Image) {
      return res.status(400).json({ error: "Image is required" });
    }

    const investigation = await Investigation.findById(req.params.id);

    if (!investigation) {
      return res.status(404).json({ error: "Investigación no encontrada" });
    }

    investigation.Imagenes.push({
      Mime,
      ImageDescription,
      Image
    });

    await investigation.save();
    
    res.status(201).json(investigation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Lista de investigaciones
export const getInvestigation = async (req, res) => {
  try {
    const investigations = await Investigation.find()
      .populate("ResearchID", "Fullname Email");;
    res.json(investigations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};