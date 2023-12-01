import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Rated from "./pages/Rated";
import Navbar from "./components/Navbar";
import Movie from "./components/Movie";
import Show from "./components/Show";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/auth" element={<Auth/>} />
          <Route path="/rated" element={<Rated/>} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/show/:id" element={<Show />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
