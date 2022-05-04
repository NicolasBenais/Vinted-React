import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/home"> Home</Link>
        <br />
        <Link to="/offer"> Offer</Link>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/offer" element={<Offer />} />
      </Routes>
    </Router>
  );
}

export default App;
