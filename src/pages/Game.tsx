import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import FadeInTransition from "../components/divs/FadeInTransition";
import MyTimer from "../components/timer/MyTimer";
import Opponent from "../components/boards/Opponent";
import CardPile from "../components/boards/CardPile";
import Card from "../components/cards/Card";
import { ILanguage } from "../components/cards/cardTypes";

import useSocket from "../hooks/useGameSocket";
import useUsername from "../hooks/useUsername";

const ENDPOINT = "http://localhost:5000";

const gameBoard = "game-board space-y-5 ";
const deckHUD = "deck-hud flex items-center space-x-28 w-auto";
const moveAlert = "move-alert mt-9 mb-2 p-1 border-t-8 border-2 border-yellow-500 flex items-center justify-around position-absolute";
const moveAlertText = "move-alert-text text-sm";
const alertIcon = "alert-icon h-4 animate-ping";
const gameMessageContainer = "game-message-container w-full flex justify-center position-relative";
const messageMotion = "mt-9 mb-2 p-1 border-t-8 border-2 border-red-500 flex items-center justify-around position-absolute";
const loadingIcon = "loading-icon h-4 animate-spin";
const messageText = "message-text text-sm";
const confirmChoiceContainer = "confirm-choice-container flex justify-center position-relative";
const buttonsContainer = "buttons-container mt-4 flex justify-center space-x-4 position-absolute";
const buttons = "buttons p-2 h-10 bg-red-500 text-white hover:animate-pulse hover:bg-blue-600 hover:text-white flex-auto";

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
      // Event listeners for socket events
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

    // Clean up the socket on component unmount
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
      setMessage("ERR: Turn execution failed.");
    }
  };

  useEffect(() => {
    if (message) {
      // Remove message after 3 seconds
      const timeout = setTimeout(() => {
        setMessage(null);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [message]);

  return (
    <FadeInTransition>
      <div className={gameBoard}>

        <MyTimer countdown={countdown} timer={timer} />

        <Opponent />

        <div className={deckHUD}>
          {data && (
            <Card
              key={data.id}
              language={data}
              pendingStat={pendingStatValue}
              leadingPlayer={isLeadingPlayer}
              onStatSelect={handleStatSelect}
            />
          )}

          <CardPile />
        </div>

        {resultsPage && <Link to="/result">Results</Link>}


        <AnimatePresence>
          {thinkingStat && (
            <motion.div
              className={moveAlert}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img
                className={alertIcon}
                src="https://cdn-icons-png.flaticon.com/128/4539/4539472.png"
              />
              <p className={moveAlertText}>{thinkingStat}</p>
              <img
                className={alertIcon}
                src="https://cdn-icons-png.flaticon.com/128/4539/4539472.png"
              />
            </motion.div>
          )}
        </AnimatePresence>
        
      </div>

      <div className={gameMessageContainer}>
        <AnimatePresence>
          {message && (
            <motion.div
              className={messageMotion}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img
                className={loadingIcon}
                src="https://cdn-icons-png.flaticon.com/128/10933/10933710.png"
              />
              <p className={messageText}>{message}</p>
            </motion.div>
          )}
          {resultMessage && <p className={messageText}>{resultMessage}</p>}
        </AnimatePresence>
      </div>

      <div className={confirmChoiceContainer}>
        {isLeadingPlayer && pendingStatValue !== null && (
          <div className={buttonsContainer}>
            <button
              onClick={() => {
                setSelectedStatValue(pendingStatValue);
                setShouldSend(true);
                setPendingStatValue(null);
              }}
              className={buttons}
            >
              Confirm
            </button>
            <button
              onClick={() => {
                setPendingStatValue(null);
              }}
              className={buttons}
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </FadeInTransition>
  );
}

export default CardList;