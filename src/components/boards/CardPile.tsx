import { useEffect, useState } from "react";
import { useWebSocket } from "../../hooks/useWaitingSocket";
import useUsername from "../../hooks/useUsername";

const hudContainer = "hud-container flex flex-col items-center space-y-1 w-auto";
const HUD = "HUD flex flex-col items-center w-auto";
const deckDisplay = "deck-display flex flex-col space-y-36 items-center";
const wormholeContainer = "black-hole-container flex flex-col items-center";
const wormholeArt = "wormhole-art w-48 absolute fixed top-80 mix-blend-color-exclusion";
const wormholeOverlay = "wormhole-art w-48 absolute fixed top-80 mix-blend-color-dodge";
const blackHoleCount = "black-hole-count text-2xl font-bold text-white p-3 w-36 text-center bg-gradient-to-b from-indigo-500";
const cardPileContainer = "card-pile-container flex flex-col items-center space-y-1 text-center bg-gradient-to-t from-red-500 p-4 hover:bg-blue-600";
const cardPile = "card-pile w-24 mix-blend-hard-light animate-pulse";

function CardPile() {
    const { username } = useUsername();
    const [cardsInDeck, setCardsInDeck] = useState<number>(10);
    const [cardsInBlackHole, setCardsInBlackHole] = useState<number>(0);
    
    const socket = useWebSocket();

    useEffect(() => {
        if (socket) {
        socket.on("update_assets", (data) => {
            setCardsInDeck(data[username]);
            setCardsInBlackHole(data["black_hole"]);
        });
        }
    }, [socket, username]);

    let asset_num = 3;

    if (cardsInDeck < 2) {
        asset_num = 1;
    } else if (cardsInDeck < 6) {
        asset_num = 2;
    } else if (cardsInDeck < 11) {
        asset_num = 3;
    } else if (cardsInDeck < 16) {
        asset_num = 4;
    } else if (cardsInDeck < 21) {
        asset_num = 5;
    }

    const pileUrl = `/src/assets/Images/Deck/${asset_num}.PNG`;

    return (
        <div className={hudContainer}>
            <div className={HUD}>
                <div className={deckDisplay}>
                    <div className={wormholeContainer}>
                        <div>
                            <img src="/src/assets/Images/wormhole_crack.png" alt="Wormhole" className={wormholeArt}/>
                            <img src="/src/assets/Images/wormhole_crack.png" alt="Wormhole" className={wormholeOverlay}/>
                        </div>
                        <p className={blackHoleCount}>{cardsInBlackHole}</p>
                    </div>
                    <div className={cardPileContainer}>
                        <img src={pileUrl} className={cardPile} alt="CardPile" />
                        <p>Your Deck:<br></br> {cardsInDeck} cards</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardPile;