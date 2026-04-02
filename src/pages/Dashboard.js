import React from "react";
import SummaryCards from "../components/Dashboard/SummaryCards";
import TransactionList from "../components/Transactions/TransactionList";
import FilterBar from "../components/Transactions/FilterBar";
import InsightsPanel from "../components/Insights/InsightsPanel";
import BalanceChart from "../components/Dashboard/BalanceChart";
import CategoryChart from "../components/Dashboard/CategoryChart";

function Dashboard() {
  return (
    <div className="dashboard">

      <div className="top-section">
        <SummaryCards />
      </div>

      {/* 🔥 ADD CHARTS */}
      <div className="charts-section">

  <div className="card">
    {/* <h3>Balance Trend</h3> */}
    <BalanceChart />
  </div>

  <div className="card">
    {/* <h3>Spending Breakdown</h3> */}
    <CategoryChart />
  </div>

</div>

      <div className="middle-section">
        <div className="transactions-section">
          <FilterBar />
          <TransactionList />
        </div>

        <div className="insights-section">
          <InsightsPanel />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;