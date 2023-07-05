import { motion } from "framer-motion";

interface RulesProps {
  isVisible: boolean;
}

function Rules({ isVisible }: RulesProps) {
  return (
    <motion.div
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 },
      }}
      transition={{ duration: 0.3 }}
      style={{ originX: 0 }}
    >
      <div className="bg-gray-100 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Game Rules</h2>
        <ul className="list-disc list-inside space-y-2">
          <li className="text-lg">
            Two players will take turns to select a card stat.
          </li>
          <li className="text-lg">
            Those stats will be compared - the round winner will be the highest
            of the two stats.
          </li>
          <li className="text-lg">
            The round winner will then pick the next stat.
          </li>
          <li className="text-lg">
            Each player will have 10 cards, resulting in 10 rounds.
          </li>
          <li className="text-lg">
            If the stats are equal, both players lose the round and the
            subsequent cards are sent into the black hole.
          </li>
          <li className="text-lg">
            The game is over after 10 rounds (all cards have been played).
          </li>
          <li className="text-lg">
            The overall winner is the player with the highest total round wins.
          </li>
        </ul>
      </div>
    </motion.div>
  );
}

export default Rules;
