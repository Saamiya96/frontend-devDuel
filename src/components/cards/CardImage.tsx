// CSS class name for the card image container
const cardImageContainer = "card-image-container";
const cardImage = "card-image";

interface CardImageProps {
  imageUrl: string;
}

function CardImage({ imageUrl }: CardImageProps) {
  // Render the card image
  return (
    <div className={cardImageContainer}>
      <img src={imageUrl} className={cardImage}/>
    </div>
  );
}

export default CardImage;