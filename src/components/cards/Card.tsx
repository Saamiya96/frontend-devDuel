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
  // Render the card component
  return (
    <div className="card">
      {/* Render the card header */}
      <CardHeader name={language.name} />

      {/* Render the card image */}
      <CardImage imageUrl={language.imageUrl} />

      {/* Render the card stats */}
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
