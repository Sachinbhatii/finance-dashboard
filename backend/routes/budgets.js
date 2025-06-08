import express from "express";
import Budget from "../models/Budget.js";
import auth from "../middleware/auth.js";

const router = express.Router();

// GET current user's budget for a month
router.get("/:month", auth, async (req, res) => {
  const budget = await Budget.findOne({ user: req.user, month: req.params.month });
  res.json(budget);
});

// POST or PUT set budget for a month
router.post("/", auth, async (req, res) => {
  const { amount, month } = req.body;
  let budget = await Budget.findOneAndUpdate(
    { user: req.user, month },
    { amount },
    { new: true, upsert: true }
  );
  res.json(budget);
});

export default router;