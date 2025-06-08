import express from "express";
import Expense from "../models/Expense.js";
import auth from "../middleware/auth.js";

const router = express.Router();

// GET all expenses for current user
router.get("/", auth, async (req, res) => {
  const expenses = await Expense.find({ user: req.user }).sort({ date: -1 });
  res.json(expenses);
});

// POST create new expense
router.post("/", auth, async (req, res) => {
  const { desc, amount, date } = req.body;
  const expense = new Expense({ user: req.user, desc, amount, date });
  await expense.save();
  res.status(201).json(expense);
});

// DELETE an expense
router.delete("/:id", auth, async (req, res) => {
  await Expense.deleteOne({ _id: req.params.id, user: req.user });
  res.json({ message: "Deleted" });
});

export default router;