import { useState } from "react";
import { useWebSocket } from "./useWaitingSocket";
import { useNavigate } from "react-router-dom";

function useUsername() {
  // Initialize the navigate function from react-router-dom
  const navigate = useNavigate();

  // Get the username from local storage or set it as an empty string
  const [username, setUsername] = useState<string>(
    localStorage.getItem("username") || ""
  );

  // Get the WebSocket connection from the custom hook useWebSocket
  const socket = useWebSocket();

  // Update the username, emit "waiting_room" event, and navigate to the waiting room
  const setUsernameAndNavigate = (newUsername: string) => {
    setUsername(newUsername);
    if (socket) {
      socket.emit("waiting_room", newUsername);
    }
    localStorage.setItem("username", newUsername);
    navigate("/waitingroom");
  };

  // Return the username and the function to set the username
  return { username, setUsername: setUsernameAndNavigate };
}

export default useUsername;
