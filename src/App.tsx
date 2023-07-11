import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Game from "./pages/Game";
import WaitingRoom from "./pages/WaitingRoom";

import "./styles/App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="game" element={<Game />} />
          <Route path="waitingroom" element={<WaitingRoom />} />
        </Route>
      </Routes>
    </Router>
  );
}
   
export default App;
