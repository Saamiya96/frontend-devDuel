import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MyTimer from "../components/timer/MyTimer";
import CardPile from "../components/boards/CardPile";
import Card from "../components/cards/Card";
import { ILanguage } from "../components/cards/cardTypes";
import useSocket from "../hooks/useGameSocket";
import useUsername from "../hooks/useUsername";

const ENDPOINT = "http://localhost:5000";

function CardList() {
  const { username } = useUsername();
  const [selectedStatValue, setSelectedStatValue] = useState<string | null>(
    null
  );
  const [pendingStatValue, setPendingStatValue] = useState<string | null>(null);
  const [shouldSend, setShouldSend] = useState(false);
  const [isLeadingPlayer, setLeadingPlayer] = useState(false);
  const [data, setData] = useState<ILanguage | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [resultMessage, setResultMessage] = useState<string | null>(null);
  const [resultsPage, setResultsPage] = useState<boolean>(false);
  const [timer, setTimer] = useState<boolean>(false);
  const [countdown, setCountdown] = useState<number | null>(null);

  const { socket, thinkingStat } = useSocket(ENDPOINT, {
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

      socket.on("leader", (newLeader: boolean) => {
        setLeadingPlayer(newLeader);
      });

      socket.on("result", (newResultMessage: string) => {
        setResultMessage(newResultMessage);
        setResultsPage(true);
      });

      socket.on("start_timer", (newTimer: boolean) => {
        setTimer(newTimer);
      });

      socket.on("countdown", (newCountdown: number | null) => {
        setCountdown(newCountdown);
      });
    }
    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, [socket]);

  const handleStatSelect = (value: string) => {
    if (isLeadingPlayer) {
      setPendingStatValue(value);
      if (socket) {
        socket.emit("thinking_stat", value);
      }
    } else {
      setMessage("Wait your turn loser...");
    }
  };

  return (
    <div>
      <MyTimer countdown={countdown} timer={timer} />
      <CardPile/>
      {resultsPage && <Link to="/result">Link to Results Page</Link>}
      {data && (
        <Card
          key={data.id}
          language={data}
          pendingStat={pendingStatValue}
          leadingPlayer={isLeadingPlayer}
          onStatSelect={handleStatSelect}
        />
      )}
      {thinkingStat && <p>{thinkingStat}</p>}
      {isLeadingPlayer && pendingStatValue !== null && (
        <div>
          <p>Pending stat value: {pendingStatValue}</p>
          <button
            onClick={() => {
              setSelectedStatValue(pendingStatValue);
              setShouldSend(true);
              setPendingStatValue(null);
            }}
          >
            Confirm
          </button>
          <button
            onClick={() => {
              setPendingStatValue(null);
            }}
          >
            Cancel
          </button>
        </div>
      )}
      {message && <p>{message}</p>}
      {resultMessage && <p>{resultMessage}</p>}
    </div>
  );
}

export default CardList;
