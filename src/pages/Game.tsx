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
  const [shouldSend, setShouldSend] = useState(false);
  const [data, setData] = useState<ILanguage | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const socket = useSocket(ENDPOINT, {
    username,
    stat: selectedStatValue,
    shouldSend,
  });

  useEffect(() => {
    if (socket) {
      socket.on("data", (newData: ILanguage) => {
        setData(newData);
        setShouldSend(false);
      });

      socket.on("message", (newMessage: string) => {
        setMessage(newMessage);
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
      {data && (
        <Card
          key={data.id}
          language={data}
          onStatSelect={(value) => {
            setSelectedStatValue(value);
            setShouldSend(true);
          }}
        />
      )}
      {selectedStatValue !== null && (
        <p>Selected stat value: {selectedStatValue}</p>
      )}
      {message && <p>{message}</p>}
    </div>
  );
}

export default CardList;
