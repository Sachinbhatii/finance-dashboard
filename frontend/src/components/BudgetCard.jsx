import React, { useState } from "react";

const BudgetCard = () => {
  const [budget, setBudget] = useState(2000);

  // TODO: Fetch/update budget from backend
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-bold text-lg mb-2">Monthly Budget</h2>
      <div className="flex items-center">
        <input
          type="number"
          className="border p-2 rounded mr-2"
          value={budget}
          onChange={e => setBudget(e.target.value)}
          min={0}
        />
        <span className="text-gray-600">USD</span>
      </div>
    </div>
  );
};

export default BudgetCard;