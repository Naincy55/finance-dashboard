import React from "react";
import { AppProvider } from "./context/AppContext";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Common/Navbar";
import "./App.css";

function App() {
  return (
    <AppProvider>
      <Navbar />
      <Dashboard />
    </AppProvider>
  );
}

export default App;