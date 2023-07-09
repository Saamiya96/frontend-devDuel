import { useEffect, useState } from "react";
import socketIOClient, { Socket } from "socket.io-client";

interface SocketMessage {
  username: string;
  stat: string | null;
  shouldSend: boolean;
}

const useSocket = (endpoint: string, message: SocketMessage) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [messageSent, setMessageSent] = useState(false);
  const [thinkingStat, setThinkingStat] = useState<string | null>(null);

  useEffect(() => {
    const newSocket = socketIOClient(endpoint);
    setSocket(newSocket);
    newSocket.emit("username", { username: message.username });

    newSocket.on("thinking_stat", (stat: string) => {
      setThinkingStat(stat);
    });

    return () => {
      newSocket.disconnect();
    };
  }, [endpoint, message.username]);

  useEffect(() => {
    if (socket) {
      socket.on("data", () => {
        setMessageSent(false);
      });

      if (message.stat !== null && message.shouldSend && !messageSent) {
        socket.emit("message", {
          username: message.username,
          stat: message.stat,
        });
        setMessageSent(true);
      }
    }
  }, [socket, message, messageSent]);

  return { socket, thinkingStat };
};

export default useSocket;
