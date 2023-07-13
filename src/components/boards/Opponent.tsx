import { useEffect, useState } from "react";

const opponentContainer = "opponent-container flex flex-col items-center w-auto bg-gradient-to-t from-gray-500 border-b-2 border-red-500";
const opponentImage = `enemy w-32 mix-blend-luminosity animate-pulse`;

function Opponent() {
    const [opponent, setOpponent] = useState<string | null>(
        localStorage.getItem("opponent") || null
    );

    useEffect(() => {
        const opponents = ["Cook", "Gates", "Musk", "Zucc"];
        if (opponent === null) {
        const newOpponent =
            opponents[Math.floor(Math.random() * opponents.length)];
        setOpponent(newOpponent);
        localStorage.setItem("opponent", newOpponent);
        }
    }, [opponent]);

    const opposition = `/src/assets/Images/Opponents/${opponent}.PNG`;

    return (
        <div className={opponentContainer}>
            <img src={opposition} className={opponentImage} alt="" />
        </div>
    )
}

export default Opponent;