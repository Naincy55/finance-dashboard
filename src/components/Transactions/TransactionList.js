import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import "./TransactionList.css";

function TransactionList() {
  const {
    transactions,
    filter,
    search,
    role,
    deleteTransaction,
    addTransaction,
    editTransaction,
    resetData,
  } = useContext(AppContext);

  const [showForm, setShowForm] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const [form, setForm] = useState({
    id: null,
    category: "",
    amount: "",
    type: "expense",
    date: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.category || !form.amount || !form.date) {
      alert("Please fill all fields");
      return;
    }

    if (editMode) {
      editTransaction({
        ...form,
        amount: Number(form.amount),
      });
    } else {
      addTransaction({
        ...form,
        amount: Number(form.amount),
      });
    }

    resetForm();
  };

  const resetForm = () => {
    setShowForm(false);
    setEditMode(false);
    setForm({
      id: null,
      category: "",
      amount: "",
      type: "expense",
      date: "",
    });
  };

  const handleEdit = (t) => {
    setForm(t);
    setEditMode(true);
    setShowForm(true);
  };

  const exportCSV = () => {
    const csv = transactions
      .map((t) => `${t.category},${t.amount},${t.type},${t.date}`)
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "transactions.csv";
    a.click();
  };

  const filtered = transactions
    .filter((t) => filter === "all" || t.type === filter)
    .filter((t) => {
      const s = search.toLowerCase();
      return (
        t.category.toLowerCase().includes(s) ||
        t.date.includes(s) ||
        t.type.toLowerCase().includes(s) ||
        t.amount.toString().includes(s)
      );
    });

  return (
    <div className="transaction-container">
      <div className="transaction-header">
        <h3>Transactions</h3>

        <div style={{ display: "flex", gap: "10px" }}>
          <button className="export-btn" onClick={exportCSV}>
            Export CSV
          </button>

           {/* ✅ RESET BUTTON */}
  <button
    className="reset-btn"
    onClick={() => {
      if (window.confirm("Reset all data to default?")) {
        resetData();
      }
    }}
  >
    Reset
  </button>

          {role === "admin" && (
            <button className="add-btn" onClick={() => setShowForm(true)}>
              + Add
            </button>
          )}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="no-data">No transactions found</p>
      ) : (
        filtered.map((t) => (
          <div key={t.id} className="transaction animate">
            <div>
              <p>{t.category}</p>
              <small>{t.date}</small>
            </div>

            <span className={`amount ${t.type}`}>₹{t.amount}</span>

            <span className={`badge ${t.type}`}>{t.type}</span>

            {role === "admin" && (
              <div style={{ display: "flex", gap: "8px" }}>
                <button className="edit-btn" onClick={() => handleEdit(t)}>
                  ✏️
                </button>

                <button
                  className="delete-btn"
                  onClick={() => {
                    if (
                      window.confirm(
                        "Are you sure you want to delete this transaction?",
                      )
                    ) {
                      deleteTransaction(t.id);
                    }
                  }}
                >
                  🗑
                </button>
              </div>
            )}
          </div>
        ))
      )}

      {showForm && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>{editMode ? "Edit Transaction" : "Add Transaction"}</h3>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="category"
                placeholder="Category"
                value={form.category}
                onChange={handleChange}
              />

              <input
                type="number"
                name="amount"
                placeholder="Amount"
                value={form.amount}
                onChange={handleChange}
              />

              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
              />

              <select name="type" value={form.type} onChange={handleChange}>
                <option value="expense">Expense</option>
                <option value="income">Income</option>
              </select>

              <div className="modal-buttons">
                <button type="submit">{editMode ? "Update" : "Add"}</button>

                <button type="button" onClick={resetForm}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default TransactionList;
