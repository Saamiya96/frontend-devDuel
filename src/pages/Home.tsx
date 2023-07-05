import { useState } from "react";
import { motion } from "framer-motion";

const show = {
  opacity: 1,
  y: 0,
};

const hide = {
  opacity: 0,
  y: 50,
};

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center">

        <motion.div
          className="top-half flex flex-col items-center"
          animate={!isVisible ? { y: 55 } : { y: -50 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="mb-3">Dev Duel</h1>
          <form className="w-full max-w-sm">
            <div className="flex items-center border-b border-gray-900 py-2">
              <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="username" aria-label="Full name"/>
              <button className="flex-shrink-0 bg-gray-900 hover:bg-gray-300 border-gray-900 hover:border-gray-300 hover:text-black text-sm border-4 text-white py-1 px-2 rounded" type="button">
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
            <p>
              1. Shuffle and deal the cards face down.<br></br>
              2. Players pick up their cards and look at their top cards only.<br></br>
              3. Player 1 (left of dealer) chooses and calls out their best stat (e.g. Salary - £60,000).<br></br>
              4. The other players see if they can beat this stat (Highest number wins).<br></br>
              5. The card with the highest stat wins all of the top cards and adds them to the base of their pile.<br></br>
              6. The winner of the round chooses the stat for the next round.<br></br>
              7. The first player to get all of the cards wins. But we will set 5 minute timer
            </p>
          </motion.div>

          <motion.div 
            className="bottom-half"
            animate={!isVisible ? { y: -100 } : { y: 50 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              className="bg-gray-900 hover:bg-gray-300 border-gray-900 hover:border-gray-300 hover:text-black text-white font-bold py-2 px-4 rounded"
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsVisible(!isVisible)}
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
