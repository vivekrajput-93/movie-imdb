import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Rated from "./pages/Rated";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/auth" element={<Auth/>} />
          <Route path="/rated" element={<Rated/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
