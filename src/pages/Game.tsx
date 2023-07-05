import { useState, useEffect } from "react";
import Card from "../components/cards/Card";
import { ILanguage } from "../components/cards/cardTypes";
import useSocket from "../hooks/useSocket";
import useUsername from "../hooks/useUsername";

const ENDPOINT = "http://localhost:5000";

function CardList() {
  const { username } = useUsername();
  const [selectedStatValue, setSelectedStatValue] = useState<number | null>(
    null
  );
  const [data, setData] = useState<ILanguage[]>([]);

  const socket = useSocket(ENDPOINT, { username, stat: selectedStatValue });

  useEffect(() => {
    if (socket) {
      socket.on("data", (newData: ILanguage[]) => {
        setData(newData);
      });
    }
    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, [socket]);

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
