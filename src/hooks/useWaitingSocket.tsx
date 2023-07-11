// useWebSocket.ts
import { useContext } from "react";
import { WebSocketContext } from "../context/WebSocketContext";

// Custom hook to access the WebSocket connection from the WebSocketContext
export function useWebSocket() {
    // Use the useContext hook to get the WebSocketContext value
    return useContext(WebSocketContext);
}