import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import Cart from "./pages/Cart";

import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Router>
      <Layout />
      <Routes>
        <Route path="/" element={<LandingPage /> } />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />}/>
      </Routes>
    </Router>
  );
}

export default App;
