import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Welcome to Nutrifit</h2>;
}

function Dashboard() {
  return <h2>User Dashboard</h2>;
}

function Admin() {
  return <h2>Admin Dashboard</h2>;
}

function App() {
  return (
    <div>
      <h1>Nutrifit</h1>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link> |{" "}
        <Link to="/admin">Admin</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
