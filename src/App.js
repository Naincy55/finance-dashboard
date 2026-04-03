import React, { useContext } from "react";
import { AppProvider, AppContext } from "./context/AppContext";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Common/Navbar";
import "./App.css";

// 🔥 Inner App to access theme
function MainApp() {
  const { theme } = useContext(AppContext);

  return (
    <div className={theme}>
      <Navbar />
      <Dashboard />
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <MainApp />
    </AppProvider>
  );
}

export default App;