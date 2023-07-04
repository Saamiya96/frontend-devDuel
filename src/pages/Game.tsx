import { useState } from "react";
import Card from "../components/cards/Card";
import languages from "../data/testCards.json";
import { ILanguage } from "../components/cards/cardTypes";

function CardList() {
  const [selectedStatValue, setSelectedStatValue] = useState<number | null>(
    null
  );

  return (
    <div>
      {languages.map((language: ILanguage) => (
        <Card
          key={language.id}
          language={language}
          onStatSelect={setSelectedStatValue}
        />
      ))}
      {selectedStatValue !== null && (
        <p>Selected stat value: {selectedStatValue}</p>
      )}
    </div>
  );
}

export default CardList;
