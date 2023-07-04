import Card from "../components/cards/Card";
import languages from "../data/testCards.json";
import { ILanguage } from "../components/cards/cardTypes";

function CardList() {
  return (
    <div>
      {languages.map((language: ILanguage) => (
        <Card key={language.id} language={language} />
      ))}
    </div>
  );
}

export default CardList;
