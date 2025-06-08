import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ["Rent", "Groceries", "Utilities"],
  datasets: [
    {
      label: "Spending ($)",
      data: [900, 120, 80],
      backgroundColor: "#2563eb"
    }
  ]
};

const options = {
  responsive: true,
  plugins: {
    legend: { display: false }
  }
};

const SpendingChart = () => (
  <div className="bg-white p-4 rounded shadow">
    <h2 className="font-bold text-lg mb-2">Spending Trends</h2>
    <Bar data={data} options={options} />
  </div>
);

export default SpendingChart;