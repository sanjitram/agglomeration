import { useState, useEffect } from 'react';

function MidnightTimer() {
  const [timeUntilMidnight, setTimeUntilMidnight] = useState('');

  useEffect(() => {
    const calculateTimeUntilMidnight = () => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0);
      const diff = midnight - now;

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    const checkMidnight = () => {
      const now = new Date();
      if (now.getHours() === 0 && now.getMinutes() === 0 && now.getSeconds() === 0) {
        alert("It's a new day! Checkout a daily challenge");
      }
    };

    const timer = setInterval(() => {
      setTimeUntilMidnight(calculateTimeUntilMidnight());
      checkMidnight();
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg shadow mb-4">
      <h3 className="text-lg font-bold mb-2">Time until daily challenge</h3>
      <p className="text-3xl font-mono text-orange-500">{timeUntilMidnight}</p>
    </div>
  );
}

export default MidnightTimer;