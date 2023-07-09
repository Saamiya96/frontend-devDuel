import { ILanguage } from "./cardTypes";
import CardHeader from "./CardHeader";
import CardImage from "./CardImage";
import CardStats from "./CardStats";

interface CardProps {
  language: ILanguage;
  onStatSelect: (stat: string) => void;
  pendingStat: string | null;
  leadingPlayer: boolean;
}

function Card({
  language,
  onStatSelect,
  pendingStat,
  leadingPlayer,
}: CardProps) {
  return (
    <div className="card">
      <CardHeader name={language.name} />
      <CardImage imageUrl={language.imageUrl} />
      <CardStats
        stats={language.stats}
        onStatSelect={onStatSelect}
        pendingStat={pendingStat}
        leadingPlayer={leadingPlayer}
      />
    </div>
  );
}

export default Card;
