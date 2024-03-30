import React from 'react';
import "../styles/timer.css"
import "../styles/general.css"
import { useNavigate } from 'react-router-dom';

function MenuItemTimer(props) {
    const navigate = useNavigate()
    const [timerFinished, setTimerFinished] = React.useState(false);
    const [hours, setHours] = React.useState(0);
    const [minutes, setMinutes] = React.useState(0);
    const [seconds, setSeconds] = React.useState(0);
  
    // const deadline = "March, 31, 2024";
  
    const getTime = () => {
      const time = new Date(new Date(props.dateMade).getTime() + (props.totalWaitTime*60000))- Date.now();  
      
      if(time > 0 || (!props.completed && time > 0)) {
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
      } else {
        setTimerFinished(true)
      }
    };
  
    React.useEffect(() => {
        if(!timerFinished ) {
            const interval = setInterval(() => getTime(), 1000);
        
            return () => clearInterval(interval);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  



    return (
        <main className="background">
            <div className="container center">
                <h1 className="heading">Your order from <span style={{color: "#ea2251"}} onClick={() => navigate("/restaurant/"+props.restaurantId)} id='restaurant_name'>{props.restaurantName}</span> {timerFinished ? "is ready, you can collect it" : "will be ready in:"}</h1>

                <section className="countdown-timer">

                    {/*Countdown for Hours*/}
                    <div className="countdown-info">
                        <div className="timer-box">
                            <div className="circle-left"></div>
                            <p style={{fontWeight: "800"}} id="hours" className="primary">{props.completed ? "00" : `${hours < 10 ? "0" : ""}${hours}`}</p>
                            <div className="circle-right"></div>
                        </div>
                        <p className="sub-heading">HOURS</p>
                    </div>

                    {/*Countdown for Minutes*/}
                    <div className="countdown-info">
                        <div className="timer-box">
                            <div className="circle-left"></div>
                            <p style={{fontWeight: "800"}} id="minutes" className="primary">{props.completed ? "00" : `${minutes < 10 ? "0" : ""}${minutes}`}</p>
                            <div className="circle-right"></div>
                        </div>
                        <p className="sub-heading">MINUTES</p>
                    </div>

                    {/*Countdown for Seconds*/}
                    <div className="countdown-info">
                        <div className="timer-box">
                            <div className="circle-left"></div>
                            <p style={{fontWeight: "800"}} id="seconds" className="primary">{props.completed ? "00" : `${seconds < 10 ? "0" : ""}${seconds}`}</p>
                            <div className="circle-right"></div>
                        </div>
                        <p className="sub-heading">SECONDS</p>
                    </div>

                </section>
            </div>
        </main>
    )
}


export default MenuItemTimer