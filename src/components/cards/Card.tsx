import { ILanguage } from "./cardTypes";
import CardHeader from "./CardHeader";
import CardImage from "./CardImage";
import CardStats from "./CardStats";

interface CardProps {
  language: ILanguage;
}

function Card({ language }: CardProps) {
  return (
    <div className="card">
      <CardHeader name={language.name} />
      <CardImage imageUrl={language.imageUrl} />
      <CardStats stats={language.stats} />
    </div>
  );
}

export default Card;
