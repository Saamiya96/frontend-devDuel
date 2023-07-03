interface CardHeaderProps {
  name: string;
}

const CardHeader = ({ name }: CardHeaderProps) => (
  <div className="card-header">
    <h2>{name}</h2>
  </div>
);

export default CardHeader;
