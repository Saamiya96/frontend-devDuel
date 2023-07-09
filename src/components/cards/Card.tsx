import { ILanguage } from "./cardTypes";
import CardHeader from "./CardHeader";
import CardImage from "./CardImage";
import CardStats from "./CardStats";

interface CardProps {
  language: ILanguage;
  onStatSelect: (statValue: string) => void;
}

function Card({ language, onStatSelect }: CardProps) {
  return (
    <div className="card">
      <CardHeader name={language.name} />
      <CardImage imageUrl={language.imageUrl} />
      <CardStats stats={language.stats} onStatSelect={onStatSelect} />
    </div>
  );
}

export default Card;
