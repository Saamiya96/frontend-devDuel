import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Result {
  [username: string]: number;
}

const ResultsPage = () => {
  const [results, setResults] = useState<Result | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/results")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error fetching results");
        }
        return response.json();
      })
      .then((data: Result) => setResults(data))
      .catch((error) => console.error("Error fetching results:", error));
  }, []);

  const handleNewGame = () => {
    fetch("http://localhost:5000/clear_data", { method: "POST" })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error clearing data");
        }
        navigate("/waitingroom");
      })
      .catch((error) => console.error("Error clearing data:", error));
  };

  return (
    <div>
      <h1>Results</h1>
      {results &&
        Object.entries(results).map(([username, score]) => (
          <div key={username}>
            <h3>User: {username}</h3>
            <p>Score: {score}</p>
          </div>
        ))}
      <button onClick={handleNewGame}>Start New Game</button>
    </div>
  );
};

export default ResultsPage;
