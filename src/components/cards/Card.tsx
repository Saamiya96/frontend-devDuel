import { ILanguage } from "./cardTypes";
import CardHeader from "./CardHeader";
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
  const imageUrl = `/src/assets/Images/Logos/${language.name}.PNG`;

  return (
    <div className="card">
      <CardHeader name={language.name} />
      <img src={imageUrl} className="w-1/3" alt="LanguageLogo" />
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
