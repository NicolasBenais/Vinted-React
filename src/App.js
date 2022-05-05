import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

// Pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Cookies from "js-cookie";

function App() {
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
            />
          }
        />
        <Route
          path="/signup"
          element={
            <SignUp
              isTokenPresent={isTokenPresent}
              setIsTokenPresent={setIsTokenPresent}
            />
          }
        />
        <Route
          path="/login"
          element={
            <LogIn
              isTokenPresent={isTokenPresent}
              setIsTokenPresent={setIsTokenPresent}
            />
          }
        />
        <Route
          path="/offer/:id"
          element={
            <Offer
              isTokenPresent={isTokenPresent}
              setIsTokenPresent={setIsTokenPresent}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
