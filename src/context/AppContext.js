import React, { createContext, useState, useEffect } from "react";
import { transactionsData } from "../data/mockData";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

  // ✅ Load transactions directly (BEST PRACTICE)
  const [transactions, setTransactions] = useState(() => {
    const stored = localStorage.getItem("transactions");
    return stored ? JSON.parse(stored) : transactionsData;
  });

  // ✅ Persist role also
  const [role, setRole] = useState(() => {
    return localStorage.getItem("role") || "viewer";
  });

  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  // ✅ Save transactions
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  // ✅ Save role
  useEffect(() => {
    localStorage.setItem("role", role);
  }, [role]);

  // 🔥 ADD TRANSACTION
  const addTransaction = (newTx) => {
    setTransactions(prev => [
      ...prev,
      { ...newTx, id: Date.now() }
    ]);
  };

  // 🔥 DELETE TRANSACTION
  const deleteTransaction = (id) => {
    setTransactions(prev => prev.filter(t => t.id !== id));
  };

  // 🔥 EDIT TRANSACTION
  const editTransaction = (updatedTx) => {
    setTransactions(prev =>
      prev.map(t => (t.id === updatedTx.id ? updatedTx : t))
    );
  };

  // 🔥 DERIVED DATA
  const income = transactions
    .filter(t => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter(t => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income - expense;

  return (
    <AppContext.Provider value={{
      transactions,
      role,
      setRole,
      filter,
      setFilter,
      search,
      setSearch,

      addTransaction,
      deleteTransaction,
      editTransaction,

      income,
      expense,
      balance
    }}>
      {children}
    </AppContext.Provider>
  );
};