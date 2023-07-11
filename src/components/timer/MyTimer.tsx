import { useEffect, useState } from "react";

// CSS class names for the timer and its elements
const timerContainer = "timer-container text-center";
const timerText = "timer text-6xl";

interface MyTimerProps {
    timer: boolean;
    countdown: number | null;
}

function MyTimer({ timer, countdown }: MyTimerProps) {
    const [timeLeft, setTimeLeft] = useState<number | null>(countdown);

    useEffect(() => {
        // Start the timer when 'timer' is true
        if (timer) {
            setTimeLeft(countdown);

            const intervalId = setInterval(() => {
                setTimeLeft((timeLeft) => {
                    if (timeLeft === null || timeLeft <= 0) {
                        clearInterval(intervalId);
                        return 0;
                    }
                    return timeLeft - 1;
                    });
            }, 1000);

            // Clean up the interval when the component is unmounted or 'timer' becomes false
            return () => clearInterval(intervalId);
        }
    }, [timer, countdown]);

    // Calculate minutes and seconds from 'timeLeft'
    const minutes = timeLeft !== null ? Math.floor(timeLeft / 60) : 0;
    const seconds = timeLeft !== null ? Math.floor(timeLeft % 60) : 0;

    // Render the timer
    return (
        <div className={timerContainer}>
            <div className={timerText}>
                <span>
                    {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
                </span>
            </div>
        </div>
    );
}

export default MyTimer;