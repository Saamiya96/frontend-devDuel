import { IStats } from "./cardTypes";

interface CardStatsProps {
  stats: IStats;
}

const CardStats = ({ stats }: CardStatsProps) => (
  <div className="card-stats">
    {Object.entries(stats).map(([key, value], i) => (
      <div key={i}>
        <strong>{key}:</strong> {value}
      </div>
    ))}
  </div>
);

export default CardStats;
