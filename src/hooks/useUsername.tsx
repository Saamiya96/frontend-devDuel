import { useState } from "react";
import { useWebSocket } from "./useWaitingSocket";
import { useNavigate } from "react-router-dom";

function useUsername() {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>(
    localStorage.getItem("username") || ""
  );
  const socket = useWebSocket();

  const setUsernameAndNavigate = (newUsername: string) => {
    setUsername(newUsername);
    if (socket) {
      socket.emit("waiting_room", newUsername);
    }
    localStorage.setItem("username", newUsername);
    navigate("/waitingroom");
  };

  return { username, setUsername: setUsernameAndNavigate };
}

export default useUsername;
