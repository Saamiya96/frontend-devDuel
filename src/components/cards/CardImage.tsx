interface CardImageProps {
  imageUrl: string;
}

function CardImage({ imageUrl }: CardImageProps) {
  return (
    <div className="card-image w-72">
      <img src={imageUrl} />
    </div>
  );
}

export default CardImage;
