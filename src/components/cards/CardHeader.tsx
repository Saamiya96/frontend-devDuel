// CSS class name for the card header
const cardHeader = "card-header font-bold text-xl";

interface CardHeaderProps {
  name: string;
}

function CardHeader({ name }: CardHeaderProps) {
  // Render the card header
  return (
    <div className={cardHeader}>
      {/* Render the name of the language */}
      <h2>{name}</h2>
    </div>
  );
}

export default CardHeader;
