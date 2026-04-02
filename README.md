# 💰 Finance Dashboard UI

A clean and interactive Finance Dashboard built using React.  
This project allows users to track income, expenses, and understand spending patterns — all on the frontend without any backend.

---

## 📌 Objective

The goal of this project is to demonstrate frontend development skills including:

- UI/UX design
- Component structuring
- State management
- Data handling and interactivity

---

## 🚀 Features

### 📊 Dashboard Overview
- Total Balance, Income, Expense cards
- Balance Trend (time-based chart)
- Spending Breakdown (category-based chart)

---

### 📋 Transactions Section
- View all transactions
- Add new transaction (Admin only)
- Delete transaction (Admin only)
- Search by:
  - Category
  - Date
  - Amount
  - Type (Income / Expense)
- Filter:
  - All
  - Income
  - Expense

---

### 🔐 Role-Based UI
- **Viewer**
  - Can only view data
- **Admin**
  - Can add/delete transactions

Switch roles using dropdown (top right)

---

### 📈 Insights Section
- Highest spending category
- Total income
- Total expense
- Balance
- Warning if expenses exceed income

---

### 💾 Data Persistence
- Uses **localStorage**
- Data remains after page refresh

---

### 🎨 UI/UX Features
- Dark theme (modern UI)
- Glassmorphism cards
- Responsive design
- Smooth hover effects
- Clean layout using Grid system

---

## 🛠️ Tech Stack

- React.js
- Context API (State Management)
- CSS (Custom Styling)
- Recharts (for charts)

```plaintext
finance-dashboard/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── Dashboard/
│   │   │   ├── SummaryCards.js
│   │   │   ├── SummaryCards.css
│   │   │   ├── BalanceChart.js
│   │   │   ├── CategoryChart.js
│   │
│   │   ├── Transactions/
│   │   │   ├── TransactionList.js
│   │   │   ├── TransactionList.css
│   │   │   ├── FilterBar.js
│   │   │   ├── FilterBar.css
│   │
│   │   ├── Insights/
│   │   │   ├── InsightsPanel.js
│   │   │   ├── InsightsPanel.css
│   │
│   │   ├── Common/
│   │   │   ├── Navbar.js
│   │   │   ├── Navbar.css
│   │   │   ├── RoleSwitcher.js
│
│   ├── context/
│   │   └── AppContext.js
│
│   ├── data/
│   │   └── mockData.js
│
│   ├── pages/
│   │   └── Dashboard.js
│
│   ├── App.js
│   ├── App.css
│   ├── AppTest.js
│   ├── index.js
│
├── package.json
```

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/finance-dashboard.git
cd finance-dashboard
```
2️⃣ Install dependencies
```bash
npm install
```
3️⃣ Install required libraries
```bash
npm install recharts
```
4️⃣ Run the project
App will run on:
```bash
http://localhost:3000
```

💡 Approach
Used React Context API to manage:
Transactions
Filters
Search
User Role
Implemented:
Controlled forms for adding transactions
Dynamic filtering & searching
Real-time updates on UI
Charts update automatically based on data changes.

