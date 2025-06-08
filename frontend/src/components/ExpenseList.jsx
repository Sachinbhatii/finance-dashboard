import React, { useState } from "react";

const mockExpenses = [
  { id: 1, desc: "Groceries", amount: 120, date: "2025-06-01" },
  { id: 2, desc: "Rent", amount: 900, date: "2025-06-01" },
  { id: 3, desc: "Utilities", amount: 80, date: "2025-06-02" },
];

const ExpenseList = () => {
  // TODO: Fetch expenses from backend
  const [expenses, setExpenses] = useState(mockExpenses);

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-bold text-lg mb-2">Expenses</h2>
      <ul>
        {expenses.map(e => (
          <li key={e.id} className="flex justify-between border-b py-1">
            <span>{e.desc}</span>
            <span>${e.amount}</span>
            <span className="text-gray-400 text-xs">{e.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;