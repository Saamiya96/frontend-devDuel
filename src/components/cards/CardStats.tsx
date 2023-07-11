import { IStats } from "./cardTypes";

// CSS class names for the card stats
const cardStats = "card-stats";
const cardStat = "card-stat p-2 h-10 hover:animate-pulse hover:bg-blue-600 hover:text-white hover:cursor-pointer";

interface CardStatsProps {
  stats: IStats;
  onStatSelect: (stat: string) => void;
  pendingStat: string | null;
  leadingPlayer: boolean;
}

function CardStats({
  stats,
  onStatSelect,
  pendingStat,
  leadingPlayer,
}: CardStatsProps) {
  // Render the card stats
  return (
    <div
      className={cardStats}
    >
      {Object.entries(stats).map(([key, value], i) => (
        <div
          className={cardStat}
          key={i}
          onClick={() => onStatSelect(key)}
          style={{
            backgroundColor: leadingPlayer && key === pendingStat ? "orange" : "",
          }}
        >
          {/* Display the stat name and its corresponding value */}
          <strong>{key}:</strong> {value}
        </div>
      ))}
    </div>
  );
}

export default CardStats;
