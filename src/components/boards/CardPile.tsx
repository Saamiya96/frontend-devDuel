
import { useEffect, useState } from 'react';
import { useWebSocket } from "../../hooks/useWaitingSocket";
import useUsername from '../../hooks/useUsername';

function CardPile() {
  const { username } = useUsername();
  const [cardsInDeck, setCardsInDeck] = useState<number>(10);
  const [cardsInBlackHole, setCardsInBlackHole] = useState<number>(0);
  const opponents = ['Cook', 'Gates', 'Musk', 'Zucc']
  const [opponent, setOpponent] = useState<string | null>(localStorage.getItem('opponent') || null);
  const socket = useWebSocket();
  

  useEffect(() => {
    if (socket) {
      socket.on("update_assets", (data) => {
        setCardsInDeck(data[username])
        setCardsInBlackHole(data['black_hole'])
      })
    }
  }, [socket, username])

  let asset_num = 3
  
  if (cardsInDeck < 2) {
    asset_num = 1
  }
  else if (cardsInDeck < 6) {
    asset_num = 2
  }
  else if (cardsInDeck < 11) {
    asset_num = 3
  }
  else if (cardsInDeck < 16) {
    asset_num = 4
  }
  else if (cardsInDeck < 21) {
    asset_num = 5
  }

  useEffect(() => {
    if (opponent === null) {
      const newOpponent = opponents[Math.floor(Math.random() * opponents.length)];
      setOpponent(newOpponent);
      localStorage.setItem('opponent', newOpponent);
    }
  }, []);
  
  const pileUrl = `/src/assets/Images/Deck/${asset_num}.PNG`;
  const opposition = `/src/assets/Images/Opponents/${opponent}.PNG`;
  
  return (
    <div>
      <img src={opposition} className="w-1/5" alt="" />
      <p>{cardsInDeck}</p>
      <img src={pileUrl} className="w-1/3" alt="CardPile" />
      <p>cards in black hole {cardsInBlackHole}</p>
    </div>
  );
}

export default CardPile;

