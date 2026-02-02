import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ReportIssue from "./pages/ReportIssue";
import Issues from "./pages/Issues";
import Admin from "./pages/Admin";

import initialIssues from "./data/issues";

function App() {
  const [issues, setIssues] = useState(initialIssues);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/report"
          element={<ReportIssue issues={issues} setIssues={setIssues} />}
        />

        <Route path="/issues" element={<Issues issues={issues} />} />

        <Route
          path="/admin"
          element={<Admin issues={issues} setIssues={setIssues} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
