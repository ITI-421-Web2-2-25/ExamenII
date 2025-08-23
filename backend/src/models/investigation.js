import mongoose from "mongoose";

const ImagenSchema = new mongoose.Schema({
  url: { type: String, required: true },
  ImageDescription: { type: String, required: true }, 
});

const InvestigationSchema = new mongoose.Schema({
  InvestigationID: { type: String, required: true, unique: true },
  InvestigationTitle: { type: String, required: true },
  Area: { type: String, required: true },
  Description: { type: String },
  Document: { type: Buffer },       
  DocumentMime: { type: String },
  Conclusions: { type: String }, 
  Recommendations: { type: String },
  Imagenes: [ImagenSchema],
  Estudiante: { type: mongoose.Schema.Types.ObjectId, ref: "Research" }
});

export default mongoose.model("Investigation", InvestigationSchema);