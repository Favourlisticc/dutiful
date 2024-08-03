import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Homepage from "./pages/home";
import Signup from "./auth/signup";
import Login from "./auth/login";
import Pricing from "./pages/pricing";
import Support from "./pages/support";
import Forgetpassword from "./components/forgetpassword";

function App() {
  useEffect(() => {
    // Disable right-click
    const handleContextMenu = (event) => {
      event.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextMenu);

    // Disable some keyboard shortcuts for opening dev tools
    const handleKeyDown = (event) => {
      if (
        (event.ctrlKey && event.shiftKey && event.key === "I") || // Ctrl+Shift+I
        (event.ctrlKey && event.shiftKey && event.key === "J") || // Ctrl+Shift+J
        (event.ctrlKey && event.key === "U") // Ctrl+U
      ) {
        event.preventDefault();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      // Cleanup event listeners on unmount
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/support" element={<Support />} />
        <Route path="/forget-password" element={<Forgetpassword />} />
        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
}

export default App;
