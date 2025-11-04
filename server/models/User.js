import mongoose from "mongoose";
const userSchema = mongoose.Schema({
  Fname: { type: String, required: true },
  Lname: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String },
  phone_number: { type: String },
  role: { type: mongoose.Schema.Types.ObjectId, ref: "Role", required: true },
  zone: String,
  woreda: String,
  kebele: String,
  status: { type: String, enum: ["active", "inactive"], default: "active" }
}, { timestamps: true });

export default mongoose.model("User", userSchema);