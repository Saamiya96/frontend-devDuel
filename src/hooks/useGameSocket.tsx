import { useEffect, useState } from "react";
import socketIOClient, { Socket } from "socket.io-client";

interface SocketMessage {
  username: string;
  stat: string | null;
  shouldSend: boolean;
}

const useSocket = (endpoint: string, message: SocketMessage) => {
  // State to hold the socket connection and other variables
  const [socket, setSocket] = useState<Socket | null>(null);
  const [messageSent, setMessageSent] = useState(false);
  const [thinkingStat, setThinkingStat] = useState<string | null>(null);

  useEffect(() => {
    // Establish a socket connection and initialize event listeners
    const newSocket = socketIOClient(endpoint);
    setSocket(newSocket);

    // Emit the "username" event to the server
    newSocket.emit("username", { username: message.username });

    // Listen for the "thinking_stat" event from the server
    newSocket.on("thinking_stat", (stat: string) => {
      setThinkingStat(stat);
    });

    // Clean up the socket connection on component unmount
    return () => {
      newSocket.disconnect();
    };
  }, [endpoint, message.username]);

  useEffect(() => {
    if (socket) {
      // Listen for the "data" event from the server
      socket.on("data", () => {
        setMessageSent(false);
      });

      // Send the message if all conditions are met
      if (message.stat !== null && message.shouldSend && !messageSent) {
        socket.emit("message", {
          username: message.username,
          stat: message.stat,
        });
        setMessageSent(true);
      }
    }
  }, [socket, message, messageSent]);

  // Return the socket connection and the thinkingStat value
  return { socket, thinkingStat };
};

export default useSocket;
