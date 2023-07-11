import { useEffect, useState } from "react";
import { useWebSocket } from "../hooks/useWaitingSocket";
import { Link } from "react-router-dom";

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
    <div>
      <h1>Waiting Room</h1>
      <p>Current Players:</p>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
      {users.length === 2 && (
        <Link to="/game">
          <button>Start Game</button>
        </Link>
      )}
      {users.length < 2 && (
        <p>Waiting for another player...</p>
      )}
    </div>
  );
}

export default WaitingRoom;
