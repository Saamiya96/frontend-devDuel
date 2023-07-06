import { useEffect, useState } from "react";
import socketIOClient, { Socket } from "socket.io-client";

interface SocketMessage {
  username: string;
  stat: number | null;
  shouldSend: boolean;
}

const useSocket = (endpoint: string, message: SocketMessage) => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const newSocket = socketIOClient(endpoint);
    setSocket(newSocket);

    newSocket.emit("username", message.username);

    return () => {
      newSocket.disconnect();
    };
  }, [endpoint, message.username]);

  useEffect(() => {
    if (socket && message.stat !== null && message.shouldSend) {
      socket.emit("message", {
        username: message.username,
        stat: message.stat,
      });
    }
  }, [socket, message]);

  return socket;
};

export default useSocket;
