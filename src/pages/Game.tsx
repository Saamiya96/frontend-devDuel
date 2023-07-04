import Card from "../components/cards/Card";
import characters from "../data/testCards.json";
import { ICharacter } from "../components/cards/cardTypes";

function CardList() {
  return (
    <div>
      {characters.map((character: ICharacter) => (
        <Card key={character.id} character={character} />
      ))}
    </div>
  );
}

export default CardList;
