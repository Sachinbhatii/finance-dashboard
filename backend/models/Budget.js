import mongoose from "mongoose";

const budgetSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  amount: { type: Number, required: true },
  month: { type: String, required: true } // '2025-06'
});

export default mongoose.model("Budget", budgetSchema);