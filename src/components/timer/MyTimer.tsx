import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// CSS class names for the timer and its elements
const timerContainer = "timer-container text-center";
const timerText = "timer text-6xl";

interface MyTimerProps {
  timer: boolean;
  countdown: number | null;
}

function MyTimer({ timer, countdown }: MyTimerProps) {
  const [timeLeft, setTimeLeft] = useState<number | null>(countdown);
  const navigate = useNavigate();

  useEffect(() => {
    if (timer) {
      setTimeLeft(countdown);

      const intervalId = setInterval(() => {
        setTimeLeft((timeLeft) => {
          if (timeLeft === null || timeLeft <= 1) {
            clearInterval(intervalId);
            navigate("/result");
            return 0;
          }
          return timeLeft - 1;
        });
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [timer, countdown, navigate]);

  const minutes = timeLeft !== null ? Math.floor(timeLeft / 60) : 2;
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
