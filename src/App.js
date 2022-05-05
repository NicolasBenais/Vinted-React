import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

// Pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";

function App() {
  const [isTokenPresent, setIsTokenPresent] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home isTokenPresent={isTokenPresent} />} />
        <Route
          path="/signup"
          element={<SignUp isTokenPresent={isTokenPresent} />}
        />
        <Route
          path="/login"
          element={<LogIn isTokenPresent={isTokenPresent} />}
        />
        <Route
          path="/offer/:id"
          element={<Offer isTokenPresent={isTokenPresent} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
