import { motion } from "framer-motion";

function Rules() {
  return (
    <motion.div>
      <h2 className="">Game Rules</h2>
      <ul className="">
        <li>Two players will take turns to select a card stat.</li>
        <li>
          Those stats will be compared - the round winner will be the highest
          of the two stats.
        </li>
        <li>The round winner will then pick the next stat.</li>
        <li>Each player will have 10 cards, resulting in 10 rounds.</li>
        <li>
          If the stats are equal, both players lose the round and the
          subsequent cards are sent into the black hole.
        </li>
        <li>
          The game is over after 10 rounds (all cards have been played).
        </li>
        <li>
          The overall winner is the player with the highest total round wins.
        </li>
      </ul>
    </motion.div>
  );
}

export default Rules;
