import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
  Image: { type: Buffer },
  Mime: { type: String },
  ImageDescription: { type: String, required: true }, 
});

const CommentSchema = new mongoose.Schema({
  CommentDetail:{ type: String, required: true },
  Valoration: { type: Number, min: 1, max: 5, require: true },
  Date: { type: Date, default: Date.now }
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
  Imagenes: [ImageSchema],
  Comments: [CommentSchema],
  ResearchID: { type: mongoose.Schema.Types.ObjectId, ref: "research" }
});

export default mongoose.model("Investigation", InvestigationSchema);