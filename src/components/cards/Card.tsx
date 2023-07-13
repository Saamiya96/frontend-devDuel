import { ILanguage } from "./cardTypes";
import CardHeader from "./CardHeader";
import CardStats from "./CardStats";

const cardContainer = "card-container flex flex-col border-y-2 border-white bg-gray-500 items-center space-y-1 w-auto p-2";
const languageLogoContainer = "language-logo-container w-52 h-32 overflow-hidden flex justify-end";
const languageLogo = "language-logo object-cover object-center w-full h-auto mb-[-60%] mt-[-10%] p-5";

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
    <div className={cardContainer}>
      <CardHeader name={language.name} />
      <div className={languageLogoContainer}>
        <img src={imageUrl} className={languageLogo} alt="LanguageLogo" />
      </div>
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