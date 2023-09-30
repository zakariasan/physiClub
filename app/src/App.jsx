import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Land from "./pages/landing.jsx";
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";
import Dash from "./pages/dash.jsx";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Land />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dash" element={<Dash />} />
      </Routes>
    </Router>
  );
}

export default App;
