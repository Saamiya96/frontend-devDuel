// CSS class name for the card image container
const cardImage = "card-image w-72";

interface CardImageProps {
  imageUrl: string;
}

function CardImage({ imageUrl }: CardImageProps) {
  // Render the card image
  return (
    <div className={cardImage}>
      {/* Display the image */}
      <img src={imageUrl} />
    </div>
  );
}

export default CardImage;