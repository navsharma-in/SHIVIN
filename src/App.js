import "./App.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Error from "./components/pages/Error";
import Cipet from "./components/pages/Cipet";
import Download from "./components/pages/Download";
import NavBar from "./components/layout/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/cipet" element={<Cipet />} />
          <Route exact path="/Download" element={<Download />} />
          <Route exact path="/Contact" element={<Contact />} />
          
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
