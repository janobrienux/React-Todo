import React, { useEffect, useRef, useState } from "react";
import { BsClockHistory } from "react-icons/bs";

const Clock = () => {
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date('October 22, 2020 00:00:00').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 *24));
      const hours = Math.floor((distance % (1000 * 60 * 60 *24) / (1000 * 60 * 60)));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        // stop timer
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }

    }, 1000);
  };

  useEffect(() =>{
    startTimer();
    return() => {
      clearInterval(interval.current);
    };
  });


  return (
    <>
      <section className="clock-body">
        <section style={styles.text}>
          <span className="container" style={styles.container}>
            <BsClockHistory style={styles.icon} />
            <h1 style={styles.text}>Countdown to Graduation</h1>
            <p style={styles.text}>All of your hard work is paying off, here's to completing something BIG!</p>
          </span>
        </section>
        <div style={styles.timer}>
        <section>
          <p>{timerDays}</p>
          <p>Days</p>
        </section>

        <section>
          <p>{timerHours}</p>
          <p>Hours</p>
        </section>

        <section>
          <p>{timerMinutes}</p>
          <p>Minutes</p>
        </section>

        <section>
          <p>{timerSeconds}</p>
          <p>Seconds</p>
        </section>
        </div>
      </section>
    </>
  );
};
export default Clock;

const styles = {
  container: {
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
  },
  icon: {
    width: "30%",
    height: "30%",
    color: "#e2e2e2",
    
  },
  text: {
    textAlign:"center",
    color: "#6B4E71",
  },
  timer: {
    display:"flex",
    justifyContent:"space-between",
    width: "80%",
    border: "solid white 2px",
    borderRadius: "4px",
    textAlign:"center",
    margin:"10%",
    padding:"3em",
    color:"#6B4E71",
  },
};
