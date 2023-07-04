import { ICharacter } from "./cardTypes";
import CardHeader from "./CardHeader";
import CardImage from "./CardImage";
import CardStats from "./CardStats";

interface CardProps {
  character: ICharacter;
}

function Card({ character }: CardProps) {
  return (
    <div className="card">
      <CardHeader name={character.name} />
      <CardImage imageUrl={character.imageUrl} />
      <CardStats stats={character.stats} />
    </div>
  );
}

export default Card;
