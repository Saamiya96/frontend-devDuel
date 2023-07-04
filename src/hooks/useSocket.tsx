import { useState, useEffect } from "react";
import socketIOClient, { Socket } from "socket.io-client";

const useSocket = (endpoint: string, message: number | null) => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const newSocket = socketIOClient(endpoint);
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, [endpoint]);

  useEffect(() => {
    if (socket && message !== null) {
      socket.emit("message", message);
    }
  }, [socket, message]);

  return socket;
};

export default useSocket;
