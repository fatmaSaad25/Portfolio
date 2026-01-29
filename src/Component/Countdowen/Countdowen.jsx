import { useState, useEffect } from "react";
import StyleDress from '../Dress/StyleDress.module.css'
const Dress = () => {
  const targetDate = new Date("2027-12-31T23:59:59").getTime();
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) {
      return { expired: true };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={StyleDress.countdowncontainer}>
      {timeLeft.expired ? (
        <h2 className={StyleDress.expired}>⏰ انتهى الوقت!</h2>
      ) : (
        <div className={`container ${StyleDress.countTimer}`}>
          <div className='row'>
            <div className="col-lg-3">
                <h2>UP TO 10% - 20%</h2>
            </div>
            <div className="col-lg-9 col-md-12 ">
                <div className={StyleDress.timer}>
                <small>D</small>
                <span>{timeLeft.days}</span>
                <small>H</small>
                <span>{timeLeft.hours}</span>
                <small>M</small>
                <span>{timeLeft.minutes}</span>
                <small>S</small>

                <span>{timeLeft.seconds}</span>
                </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dress;

