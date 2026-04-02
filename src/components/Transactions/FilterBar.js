import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import "./FilterBar.css";

function FilterBar() {
  const { filter, setFilter, search, setSearch } = useContext(AppContext);

  return (
    <div className="filter-bar">

      <input
        type="text"
        placeholder="Search category..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="filter-buttons">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>

        <button
          className={filter === "income" ? "active" : ""}
          onClick={() => setFilter("income")}
        >
          Income
        </button>

        <button
          className={filter === "expense" ? "active" : ""}
          onClick={() => setFilter("expense")}
        >
          Expense
        </button>
      </div>
    </div>
  );
}

export default FilterBar;