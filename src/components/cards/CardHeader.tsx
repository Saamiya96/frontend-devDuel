const cardHeaderStyling = "card-header";

interface CardHeaderProps {
  name: string;
}

function CardHeader({ name }: CardHeaderProps) {
  return (
    <div className={cardHeaderStyling}>
      <h2>{name}</h2>
    </div>
  );
}

export default CardHeader;
