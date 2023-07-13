import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import socketIOClient, { Socket } from "socket.io-client";
import { WebSocketContext } from "./context/WebSocketContext";
import "./styles/App.css";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Game from "./pages/Game";
import Result from "./pages/Result";
import WaitingRoom from "./pages/WaitingRoom";

function App() {
  // State to hold the socket connection
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    // Establish a socket connection on component mount
    const newSocket = socketIOClient("http://localhost:5000");
    setSocket(newSocket);

    // Clean up the socket connection on component unmount
    return () => {
      newSocket.disconnect();
    };
  }, []);

  return (
    // Provide the socket value to the WebSocketContext
    <WebSocketContext.Provider value={socket}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Nested routes for different pages */}
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="game" element={<Game />} />
            <Route path="waitingroom" element={<WaitingRoom />} />
            <Route path="result" element={<Result />} />
          </Route>
        </Routes>
      </Router>
    </WebSocketContext.Provider>
  );
}

export default App;
