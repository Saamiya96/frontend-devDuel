import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import { ICharacter } from "./components/cards/cardTypes";
import Card from "./components/cards/Card";
import characters from "./data/testCards.json";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <div className="app">
        {characters.map((character: ICharacter) => (
          <Card key={character.id} character={character} />
        ))}
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
