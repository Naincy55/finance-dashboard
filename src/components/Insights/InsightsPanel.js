import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import "./InsightsPanel.css";

function InsightsPanel() {
  const { transactions, income, expense, balance } = useContext(AppContext);

  const categoryTotals = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryTotals[t.category] =
        (categoryTotals[t.category] || 0) + t.amount;
    }
  });

  const keys = Object.keys(categoryTotals);

  let highest = "No data";

  if (keys.length > 0) {
    highest = keys.reduce((a, b) =>
      categoryTotals[a] > categoryTotals[b] ? a : b
    );
  }

  // 🔥 Smart insight
  let message = "No insights available";

  if (balance > 0) {
    message = "Great! You are saving money 💰";
  } else if (balance < 0) {
    message = "Warning! Your expenses exceed income ⚠️";
  }

  return (
    <div className="insights-container">
      <h3>Insights</h3>

      <p><strong>Highest Spending:</strong> {highest}</p>
      <p><strong>Total Income:</strong> ₹{income}</p>
      <p><strong>Total Expense:</strong> ₹{expense}</p>
      <p><strong>Balance:</strong> ₹{balance}</p>

      <div className="insight-message">
        {message}
      </div>
    </div>
  );
}

export default InsightsPanel;