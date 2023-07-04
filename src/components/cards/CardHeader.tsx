interface CardHeaderProps {
  name: string;
}

function CardHeader({ name }: CardHeaderProps) {
  return (
    <div className="card-header">
      <h2>{name}</h2>
    </div>
  );
}

export default CardHeader;
