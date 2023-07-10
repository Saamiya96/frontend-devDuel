import { useEffect, useState } from "react";
import { useWebSocket } from "../hooks/useWaitingSocket";

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

  return (
    <div>
      <h1>Waiting Room</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

export default WaitingRoom;
