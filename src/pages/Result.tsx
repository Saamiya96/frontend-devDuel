import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import FadeInTransition from "../components/divs/FadeInTransition";

const resultsContainer =
  "results-container flex flex-col space-y-10 text-center";
const participants = "participants flex flex-row space-x-10";
const participant =
  "participant flex flex-col border-b-2 border-red-500 bg-gradient-to-t from-gray-500 p-2";
const participantText = "participant-text animate-pulse";
const restartButton =
  "restart-button text-green-500 hover:text-green-200 hover:bg-green-800 p-3";

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
    <FadeInTransition>
      <div className={resultsContainer}>
        <h1>Results</h1>
        <div className={participants}>
          {results &&
            Object.entries(results).map(([username, score]) => (
              <div className={participant} key={username}>
                <div className={participantText}>
                  <h3>{username}</h3>
                  <p>Score: {score}</p>
                </div>
              </div>
            ))}
        </div>
        <button className={restartButton} onClick={handleNewGame}>
          Restart Program
        </button>
      </div>
    </FadeInTransition>
  );
};

export default ResultsPage;
