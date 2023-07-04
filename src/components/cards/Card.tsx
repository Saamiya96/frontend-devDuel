import { ICharacter } from "./cardTypes";
import CardHeader from "./CardHeader";
import CardStats from "./CardStats";

interface CardProps {
  character: ICharacter;
}

function Card({ character }: CardProps) {
  return (
    <div className="card">
      <CardHeader name={character.name} />
      <CardStats stats={character.stats} />
    </div>
  );
}

export default Card;
