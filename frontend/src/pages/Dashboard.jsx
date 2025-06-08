import React from "react";
import ExpenseList from "../components/ExpenseList";
import BudgetCard from "../components/BudgetCard";
import SpendingChart from "../components/SpendingChart";

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Your Finance Dashboard</h1>
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <BudgetCard />
        <SpendingChart />
      </div>
      <ExpenseList />
    </div>
  );
};

export default Dashboard;