import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

// Pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";

function App() {
  const [filters, setFilters] = useState("");
  const [isTokenPresent, setIsTokenPresent] = useState(
    Cookies.get("TokenCookie") ? true : false
  );

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              isTokenPresent={isTokenPresent}
              setIsTokenPresent={setIsTokenPresent}
              filters={filters}
              setFilters={setFilters}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <SignUp
              isTokenPresent={isTokenPresent}
              setIsTokenPresent={setIsTokenPresent}
              filters={filters}
              setFilters={setFilters}
            />
          }
        />
        <Route
          path="/login"
          element={
            <LogIn
              isTokenPresent={isTokenPresent}
              setIsTokenPresent={setIsTokenPresent}
              filters={filters}
              setFilters={setFilters}
            />
          }
        />
        <Route
          path="/offer/:id"
          element={
            <Offer
              isTokenPresent={isTokenPresent}
              setIsTokenPresent={setIsTokenPresent}
              filters={filters}
              setFilters={setFilters}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
