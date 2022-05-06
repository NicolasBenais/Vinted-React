import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

// Pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
// import TestHeader from "./pages/TestHeader";

function App() {
  const [serchBarFilter, setSerchBarFilter] = useState({});
  const [checkboxOn, setCheckboxOn] = useState(false);
  const [priceMinFilter, setPriceMinFilter] = useState(0);
  const [priceMaxFilter, setPriceMaxFilter] = useState(10000);
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
              serchBarFilter={serchBarFilter}
              setSerchBarFilter={setSerchBarFilter}
              checkboxOn={checkboxOn}
              setCheckboxOn={setCheckboxOn}
              priceMinFilter={priceMinFilter}
              setPriceMinFilter={setPriceMinFilter}
              priceMaxFilter={priceMaxFilter}
              setPriceMaxFilter={setPriceMaxFilter}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <SignUp
              isTokenPresent={isTokenPresent}
              setIsTokenPresent={setIsTokenPresent}
              serchBarFilter={serchBarFilter}
              setSerchBarFilter={setSerchBarFilter}
            />
          }
        />
        <Route
          path="/login"
          element={
            <LogIn
              isTokenPresent={isTokenPresent}
              setIsTokenPresent={setIsTokenPresent}
              serchBarFilter={serchBarFilter}
              setSerchBarFilter={setSerchBarFilter}
            />
          }
        />
        <Route
          path="/offer/:id"
          element={
            <Offer
              isTokenPresent={isTokenPresent}
              setIsTokenPresent={setIsTokenPresent}
              serchBarFilter={serchBarFilter}
              setSerchBarFilter={setSerchBarFilter}
            />
          }
        />

        {/* <Route
          path="/test"
          element={
            <TestHeader
              isTokenPresent={isTokenPresent}
              setIsTokenPresent={setIsTokenPresent}
              serchBarFilter={serchBarFilter}
              setSerchBarFilter={setSerchBarFilter}
              checkboxOn={checkboxOn}
              setCheckboxOn={setCheckboxOn}
              priceMinFilter={priceMinFilter}
              setPriceMinFilter={setPriceMinFilter}
              priceMaxFilter={priceMaxFilter}
              setPriceMaxFilter={setPriceMaxFilter}
            />
          }
        /> */}
      </Routes>
    </Router>
  );
}

export default App;
