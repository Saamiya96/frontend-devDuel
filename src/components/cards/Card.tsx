import { ICharacter } from "./cardTypes";
import CardHeader from "./CardHeader";
import CardStats from "./CardStats";

interface CardProps {
  character: ICharacter;
}

const Card = ({ character }: CardProps) => (
  <div className="card">
    <CardHeader name={character.name} />
    <CardStats stats={character.stats} />
  </div>
);

export default Card;
