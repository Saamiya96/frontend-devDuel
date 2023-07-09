import { IStats } from "./cardTypes";

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
    <div className="card-stats">
      {Object.entries(stats).map(([key, value], i) => (
        <div
          key={i}
          onClick={() => onStatSelect(key)}
          style={{
            backgroundColor:
              leadingPlayer && key === pendingStat ? "yellow" : "white",
          }}
        >
          <strong>{key}:</strong> {value}
        </div>
      ))}
    </div>
  );
}

export default CardStats;
