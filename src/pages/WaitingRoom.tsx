import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useUsername from "../hooks/useUsername";

const WaitingRoom = () => {
  const { username } = useUsername();
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/waitingroom")
      .then((response) => response.json())
      .then((data) => setPlayers(data))
      .catch((error) => console.error("Error fetching players:", error));
  }, []);

  return (
    <div>
      <h1>Waiting Room</h1>
      <p>Current Players:</p>
      {players.map((player) => (
        <div key={player}>
          <h3>{player}</h3>
        </div>
      ))}
      {players.length === 2 && (
        <Link to="/game">
        <button>Start Game</button>
        </Link>
      )}
      {players.length < 2 && (
        <p>Waiting for another player...</p>
      )}
    </div>
  );
};

export default WaitingRoom;