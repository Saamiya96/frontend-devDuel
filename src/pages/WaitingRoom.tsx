import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useWebSocket } from "../hooks/useWaitingSocket";

import FadeInTransition from "../components/divs/FadeInTransition";

const waitingRoomContainer = "waiting-room-container p-16 space-y-60";
const topContainer = "top-container flex flex-col items-center space-y-4";
const waitingLoader =
  "waiting-loader flex flex-row items-center space-x-4 animate-pulse p-3";
const startGameContainer = "start-game-container";
const startGameButton =
  "start-game text-green-500 hover:text-green-200 hover:bg-green-800 p-3";
const loadingIcon = "loading-icon h-4 animate-spin";
const playerList = "player-list flex flex-col items-center space-y-4";
const playerListItem =
  "player-list-item text-center p-3 mb-4 w-full bg-red-500 text-white";

function WaitingRoom() {
  const [users, setUsers] = useState<string[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/waiting_room")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const socket = useWebSocket();

  useEffect(() => {
    if (socket) {
      socket.on("username", (data) => {
        setUsers((prevUsers) => [...prevUsers, data.username]);
      });
    }
    return () => {
      if (socket) {
        socket.off("username");
      }
    };
  }, [socket]);

  useEffect(() => {
    if (socket) {
      socket.on("update_users", (updatedUsers) => {
        setUsers(updatedUsers);
      });
    }
    return () => {
      if (socket) {
        socket.off("update_users");
      }
    };
  }, [socket]);

  return (
    <FadeInTransition>
      <div className={waitingRoomContainer}>
        <div className={topContainer}>
          <h1>Waiting Room</h1>
          <div className={startGameContainer}>
            <FadeInTransition>
              {users.length === 2 && (
                <Link to="/game">
                  <button className={startGameButton}>EXECUTE FILE</button>
                </Link>
              )}
            </FadeInTransition>
            {users.length < 2 && (
              <div className={waitingLoader}>
                <img
                  className={loadingIcon}
                  src="https://cdn-icons-png.flaticon.com/128/10933/10933710.png"
                />
                <p>Waiting for another player...</p>
              </div>
            )}
          </div>
        </div>
        <div className={playerList}>
          <p>Current Players:</p>
          <ul>
            <FadeInTransition>
              {users.map((user, index) => (
                <li className={playerListItem} key={index}>
                  {user}
                </li>
              ))}
            </FadeInTransition>
          </ul>
        </div>
      </div>
    </FadeInTransition>
  );
}

export default WaitingRoom;
