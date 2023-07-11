import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface Result {
    [username: string]: number;
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
        <motion.div
        className="w-max mx-auto flex flex-col items-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
        >
            <h1>Results</h1>
            {results.map((result, index) => (
                <div key={index}>
                    <h3>User: {Object.keys(result)[0]}</h3>
                    <p>Score: {Object.values(result)[0]}</p>
                </div>
            ))}
        </motion.div>
    );
};

export default ResultsPage;
