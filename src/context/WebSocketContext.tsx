import { createContext } from "react";
import { Socket } from "socket.io-client";

export const WebSocketContext = createContext<Socket | null>(null);