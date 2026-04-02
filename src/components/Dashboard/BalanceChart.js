import React, { useContext } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { AppContext } from "../../context/AppContext";

function BalanceChart() {
  const { transactions } = useContext(AppContext);

  // 🔥 Group data by date
  const grouped = {};

  transactions.forEach((t) => {
    if (!grouped[t.date]) {
      grouped[t.date] = { date: t.date, income: 0, expense: 0 };
    }

    if (t.type === "income") {
      grouped[t.date].income += t.amount;
    } else {
      grouped[t.date].expense += t.amount;
    }
  });

  const chartData = Object.values(grouped);

  return (
    <div style={{ width: "100%", height: 200 }}>
      <h3>Balance Trend</h3>

      {chartData.length === 0 ? (
        <p>No data available</p>
      ) : (
        <ResponsiveContainer>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tick={{ fill: "#000", fontSize: 12}} //  dark text
              axisLine={{ stroke: "#000" }}
              tickLine={{ stroke: "#000" }}
            />

            <YAxis
              tick={{ fill: "#000", fontSize: 12 }} // dark text
              axisLine={{ stroke: "#000" }}
              tickLine={{ stroke: "#000" }}
            />
            <Tooltip
              contentStyle={{ backgroundColor: "#fff", color: "#000" }}
              labelStyle={{ color: "#000" }}
            />

            <Line
              type="monotone"
              dataKey="income"
              stroke="#10b981"
              strokeWidth={2}
            />

            <Line
              type="monotone"
              dataKey="expense"
              stroke="#ef4444"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default BalanceChart;
