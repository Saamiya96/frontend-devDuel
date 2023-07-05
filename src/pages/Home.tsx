import { useState } from "react";
import { motion } from "framer-motion";

const show = {
  opacity: 1,
  y: 0,
};

const hide = {
  opacity: 0,
  y: 20,
};

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center">
        <motion.div
          className="top-half flex flex-col items-center"
          animate={!isVisible ? { y: 0 } : { y: -50 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="mb-3">Dev Duel</h1>
          <form className="w-full max-w-sm">
            <div className="flex items-center border-b border-gray-900 py-2">
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="username"
                aria-label="Username"
                required
              />
              <button className="flex-shrink-0 hover:bg-gray-900 border-none hover:text-white text-sm border-4 text-black py-1 px-2 rounded" type="submit">
                Create Game
              </button>
            </div>
          </form>
        </motion.div>
        <div className="show-hide-box flex flex-col items-center">
          <motion.div
            animate={isVisible ? show : hide}
            transition={{ duration: 0.3 }}
            style={{
              originX: 0,
            }}
          >
            <ol className="list-decimal">
              <li>Two players will take turns to select a card stat.</li>
              <li>Those stats will be compared - the round winner will be the highest of the two stats.</li>
              <li>The round winner will then pick the next stat.</li>
              <li>Each player will have 10 cards, resulting in 10 rounds.</li>
              <li>If the stats are equal, both players lose the round and the subsequent cards are sent into the black hole.</li>
              <li>The game is over after 10 rounds (all cards have been played).</li>
              <li>The overall winner is the player with the highest total round wins.</li>
            </ol>
          </motion.div>
          <motion.div className="bottom-half" animate={!isVisible ? { y: -130 } : { y: 50 }} transition={{ duration: 0.3 }}>
            <motion.button
              className="bg-gray-900 hover:bg-gray-300 border-gray-900 hover:border-gray-300 hover:text-black text-white font-bold py-2 px-4 rounded-full"
              whileTap={{ scale: 0.95 }}
              onClick={toggleVisibility}
              whileHover={{ scale: [null, 1.5, 1.4] }}
              transition={{ duration: 0.3 }}
            >
              {isVisible ? "Hide Rules" : "Show Rules"}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Home;
