import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Game from "./pages/Game";
import Result from "./pages/Result";
import WaitingRoom from "./pages/WaitingRoom";
import { WebSocketContext } from "./context/WebSocketContext";
import { useState, useEffect } from "react";
import socketIOClient, { Socket } from "socket.io-client";
import "./styles/App.css";

function App() {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const newSocket = socketIOClient("http://localhost:5000");
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  return (
    <WebSocketContext.Provider value={socket}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
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
