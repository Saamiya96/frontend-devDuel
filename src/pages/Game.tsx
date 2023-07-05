import { useState, useEffect } from "react";
import Card from "../components/cards/Card";
// import languages from "../data/testCards.json";
import { useFetch } from "../hooks/useFetch";
import { ILanguage } from "../components/cards/cardTypes";
import useSocket from "../hooks/useSocket";

const ENDPOINT = "http://localhost:5000";

function CardList() {
  const [selectedStatValue, setSelectedStatValue] = useState<number | null>(
    null
  );
  const socket = useSocket(ENDPOINT, selectedStatValue);
  const data = useFetch("http://localhost:5000/data");

  useEffect(() => {
    if (socket) {
      socket.on("server_message", (message: string) => {
        console.log(message);
      });
    }
  }, [socket]);

  console.log(data);

  return (
    <div>
      {data &&
        data.map((language: ILanguage) => (
          <Card
            key={language.id}
            language={language}
            onStatSelect={setSelectedStatValue}
          />
        ))}
      {selectedStatValue !== null && (
        <p>Selected stat value: {selectedStatValue}</p>
      )}
    </div>
  );
}

export default CardList;
