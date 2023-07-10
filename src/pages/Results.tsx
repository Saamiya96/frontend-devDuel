// import { useState, useEffect } from "react";

// const Results = () => {
//   const [results, setResults] = useState([] as any[]);

//   useEffect(() => {
//     fetch("http://localhost:5000/results")
//       .then((response) => response.json())
//       .then((data) => setResults(data))
//       .catch((error) => console.error("Error fetching results:", error));
//   }, []);

//   return (
//     <div>
//       <h1>Results</h1>
//       {results.map((result) => (
//         <div key={result.username}>
//           <h3>{result.username}</h3>
//           <p>Score: {result.score}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Results;

import { useState, useEffect } from "react";

interface Result {
  username: string;
  score: number;
}

const ResultsPage = () => {
  const [results, setResults] = useState<Result[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/results")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error fetching results");
        }
        return response.json();
      })
      .then((data: Result[]) => setResults(data))
      .catch((error) => console.error("Error fetching results:", error));
  }, []);

  return (
    <div>
      <h1>Results</h1>
      {results.map((result) => (
        <div key={result.username}>
          <h3>{result.username}</h3>
          <p>Score: {result.score}</p>
        </div>
      ))}
    </div>
  );
};

export default ResultsPage;