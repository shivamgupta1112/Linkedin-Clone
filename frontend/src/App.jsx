import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./screens/Home.jsx";
import Auth from "./screens/Auth.jsx";
import Profile from "./screens/Profile.jsx";

const App = () => {
  return (
    <>
      <Router>
        <Routes>

          <Route path="/auth" element={<Auth />} />
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />

        </Routes>
      </Router>
    </>
  )
}

export default App;
