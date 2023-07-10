import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Card from "../components/cards/Card";
import { ILanguage } from "../components/cards/cardTypes";
import useSocket from "../hooks/useSocket";
import useUsername from "../hooks/useUsername";

const ENDPOINT = "http://localhost:5000";

function CardList() {
  const { username } = useUsername();
  const [selectedStatValue, setSelectedStatValue] = useState<string | null>(null);
  const [pendingStatValue, setPendingStatValue] = useState<string | null>(null);
  const [shouldSend, setShouldSend] = useState(false);
  const [isLeadingPlayer, setLeadingPlayer] = useState(false);
  const [data, setData] = useState<ILanguage | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [resultMessage, setResultMessage] = useState<string | null>(null);

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
      setMessage("Wait your turn, loser...");
    }
  };

  useEffect(() => {
    if (message) {
      const timeout = setTimeout(() => {
        setMessage(null);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [message]);

  return (
    <motion.div 
      className="w-max mx-auto flex flex-col items-center"
      initial={{ opacity: 0, y: -10 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeInOut" },
      }}
      >
      <div className="flex flex-col justify-center items-center">
        {data && (
          <Card
            key={data.id}
            language={data}
            pendingStat={pendingStatValue}
            leadingPlayer={isLeadingPlayer}
            onStatSelect={handleStatSelect}
          />
        )}
        <AnimatePresence>
          {thinkingStat && (
            <motion.div
              className="mt-9 mb-2 p-1 border-t-8 border-2 border-yellow-500 flex items-center justify-around"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                className="h-7"
                src="https://cdn-icons-png.flaticon.com/128/4539/4539472.png"/>
              <p className="text-sm">{thinkingStat}</p>
              <img 
                className="h-7"
                src="https://cdn-icons-png.flaticon.com/128/4539/4539472.png"/>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="w-full flex justify-center">
        <AnimatePresence>
          {message && (
            <motion.div
              className="mt-9 mb-2 p-1 border-t-8 border-2 border-red-500 flex items-center justify-around"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img
                className="h-4 animate-spin"
                src="https://cdn-icons-png.flaticon.com/128/10933/10933710.png"
              />
              <p className="text-sm">{message}</p>
            </motion.div>
          )}
          {resultMessage && <p className="text-xs">{resultMessage}</p>}
        </AnimatePresence>
      </div>
      <div className="flex justify-center">
        {isLeadingPlayer && pendingStatValue !== null && (
          <div className="mt-4 flex justify-center space-x-4">
            <button
              onClick={() => {
                setSelectedStatValue(pendingStatValue);
                setShouldSend(true);
                setPendingStatValue(null);
              }}
              className="p-2 h-10 bg-red-500 text-white hover:animate-pulse hover:bg-blue-600 hover:text-white flex-auto"
            >
              Confirm
            </button>
            <button
              onClick={() => {
                setPendingStatValue(null);
              }}
              className="p-2 h-10 bg-red-500 text-white hover:animate-pulse hover:bg-blue-600 hover:text-white flex-auto"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default CardList;
