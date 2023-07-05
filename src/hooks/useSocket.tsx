import { useState, useEffect } from "react";
import socketIOClient, { Socket } from "socket.io-client";

type SocketMessage = {
  username: string;
  stat: number | null;
};

const useSocket = (endpoint: string, { username, stat }: SocketMessage) => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const newSocket = socketIOClient(endpoint);
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, [endpoint]);

  useEffect(() => {
    if (socket && stat !== null) {
      socket.emit("message", { username, stat });
    }
  }, [socket, username, stat]);

  return socket;
};

export default useSocket;
