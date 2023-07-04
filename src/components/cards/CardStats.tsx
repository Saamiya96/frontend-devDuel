import { IStats } from "./cardTypes";

interface CardStatsProps {
  stats: IStats;
  onStatSelect: (statValue: number) => void;
}

function CardStats({ stats, onStatSelect }: CardStatsProps) {
  return (
    <div className="card-stats">
      {Object.entries(stats).map(([key, value], i) => (
        <div key={i} onClick={() => onStatSelect(value)}>
          <strong>{key}:</strong> {value}
        </div>
      ))}
    </div>
  );
}

export default CardStats;
