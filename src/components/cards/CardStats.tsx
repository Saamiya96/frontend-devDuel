import { IStats } from "./cardTypes";

const cardStatsStyling = "card-stats";
const cardStatStyling = "p-2 h-10 hover:animate-pulse hover:bg-blue-600 hover:text-white hover:cursor-pointer";

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
  return (
    <div className={cardStatsStyling}>
      {Object.entries(stats).map(([key, value], i) => (
        <div
          className={cardStatStyling}
          key={i}
          onClick={() => onStatSelect(key)}
          style={{
            backgroundColor:
              leadingPlayer && key === pendingStat ? "orange" : "",
          }}
        >
          <strong>{key}:</strong> {value}
        </div>
      ))}
    </div>
  );
}

export default CardStats;
