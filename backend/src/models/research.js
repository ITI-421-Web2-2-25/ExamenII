import mongoose from "mongoose";

const researchSchema = new mongoose.Schema({
  researchID: { type: String, required: true, unique: true },
  Fullname: { type: String, required: true },
   Email: { type: String },
   schoolgrade:{ type: String },
   password:{ type: String,required: true },
  Description: { type: String },
  Image: { type: Buffer },       
  Mime: { type: String } 
});

export default mongoose.model("research", researchSchema);