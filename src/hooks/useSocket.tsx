import { useEffect, useState } from "react";
import socketIOClient, { Socket } from "socket.io-client";

interface SocketMessage {
  username: string;
  stat: number | null;
  shouldSend: boolean;
}

const useSocket = (endpoint: string, message: SocketMessage) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [messageSent, setMessageSent] = useState(false);

  useEffect(() => {
    const newSocket = socketIOClient(endpoint);
    setSocket(newSocket);

    newSocket.emit("username", message.username);

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

  return socket;
};

export default useSocket;
