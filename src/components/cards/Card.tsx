import { ILanguage } from "./cardTypes";
import CardHeader from "./CardHeader";
import CardImage from "./CardImage";
import CardStats from "./CardStats";

interface CardProps {
  language: ILanguage;
  onStatSelect: (stat: string) => void;
  pendingStat: string | null;
}

function Card({ language, onStatSelect, pendingStat }: CardProps) {
  return (
    <div className="card">
      <CardHeader name={language.name} />
      <CardImage imageUrl={language.imageUrl} />
      <CardStats
        stats={language.stats}
        onStatSelect={onStatSelect}
        pendingStat={pendingStat}
      />
    </div>
  );
}

export default Card;
