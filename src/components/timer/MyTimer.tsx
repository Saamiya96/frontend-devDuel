import { useEffect, useState } from "react";

interface MyTimerProps {
  timer: boolean;
  countdown: number | null;
}

function MyTimer({ timer, countdown }: MyTimerProps) {
  const [timeLeft, setTimeLeft] = useState<number | null>(countdown);

  useEffect(() => {
    if (timer) {
      setTimeLeft(countdown);

      const intervalId = setInterval(() => {
        setTimeLeft((timeLeft) => {
          if (timeLeft === null || timeLeft <= 1) {
            clearInterval(intervalId);
            return 0;
          }
          return timeLeft - 1;
        });
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [timer, countdown]);

  const minutes = timeLeft !== null ? Math.floor(timeLeft / 60) : 0;
  const seconds = timeLeft !== null ? Math.floor(timeLeft % 60) : 0;

  return (
    <div className="text-center">
      <div className="text-6xl">
        <span>
          {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}

export default MyTimer;
