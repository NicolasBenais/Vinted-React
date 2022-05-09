import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

// Pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Publish from "./pages/Publish";

// Components
import Header from "./components/Header";

function App() {
  const [searchBarFilter, setSearchBarFilter] = useState({});
  const [checkboxOn, setCheckboxOn] = useState(false);
  const [priceRange, setPriceRange] = useState([10, 100]);
  const [isTokenPresent, setIsTokenPresent] = useState(
    Cookies.get("TokenCookie") ? true : false
  );

  return (
    <Router>
      <Header
        setIsTokenPresent={setIsTokenPresent}
        isTokenPresent={isTokenPresent}
        setSearchBarFilter={setSearchBarFilter}
        checkboxOn={checkboxOn}
        setCheckboxOn={setCheckboxOn}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              searchBarFilter={searchBarFilter}
              checkboxOn={checkboxOn}
              priceMinFilter={priceRange[0]}
              priceMaxFilter={priceRange[1]}
              isTokenPresent={isTokenPresent}
            />
          }
        />
        <Route
          path="/signup"
          element={<SignUp setIsTokenPresent={setIsTokenPresent} />}
        />
        <Route
          path="/login"
          element={<LogIn setIsTokenPresent={setIsTokenPresent} />}
        />
        <Route path="/offer/:id" element={<Offer />} />

        <Route path="/publish" element={<Publish />} />
      </Routes>
    </Router>
  );
}

export default App;
