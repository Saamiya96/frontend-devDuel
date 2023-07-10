import { useState, useEffect } from "react";
import { useWebSocket } from "../hooks/useWebSocket";

function useUsername() {
  const [username, setUsername] = useState<string>(
    localStorage.getItem("username") || ""
  );
  const socket = useWebSocket();

  useEffect(() => {
    localStorage.setItem("username", username);
    if (socket) {
      socket.emit("waiting_room", username);
    }
  }, [username, socket]);

  return { username, setUsername };
}

export default useUsername;
