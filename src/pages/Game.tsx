import { useState, useEffect } from "react";
import Card from "../components/cards/Card";
import languages from "../data/testCards.json";
import { ILanguage } from "../components/cards/cardTypes";
import useSocket from "../hooks/useSocket";

const ENDPOINT = "http://localhost:5000";

function CardList() {
  const [selectedStatValue, setSelectedStatValue] = useState<number | null>(
    null
  );
  const socket = useSocket(ENDPOINT, selectedStatValue);

  useEffect(() => {
    if (socket) {
      socket.on("server_message", (message: string) => {
        console.log(message);
      });
    }
  }, [socket]);

  return (
    <div>
      {languages.map((language: ILanguage) => (
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
