import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import "./SummaryCards.css";

function SummaryCards() {
  const { income, expense, balance } = useContext(AppContext);

  return (
    <div className="cards">
  <div className="card balance">
    💰 Balance <br /> ₹{balance}
  </div>

  <div className="card income">
    📈 Income <br /> ₹{income}
  </div>

  <div className="card expense">
    📉 Expense <br /> ₹{expense}
  </div>
</div>
  );
}

export default SummaryCards;