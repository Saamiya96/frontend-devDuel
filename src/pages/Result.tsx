import { useState, useEffect } from "react";

interface Result {
  [username: string]: number;
}

const ResultsPage = () => {
  const [results, setResults] = useState<Result | null>(null);

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
    </div>
  );
};

export default ResultsPage;
