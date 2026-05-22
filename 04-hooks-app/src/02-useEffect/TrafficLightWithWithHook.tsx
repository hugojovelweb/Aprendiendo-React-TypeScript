import { useEffect, useState } from "react";
import { TrafficLight } from '../01-useState/TrafficLight';

const colors = {
  red: "bg-red-500 animated-pulse",
  yellow: "bg-yellow-500 animated-pulse",
  green: "bg-green-500 animated-pulse",
};

type TrafficLightColor = "red" | "yellow" | "green"; 

export const TrafficLightWithHook = () => {
  const [light, setLight] = useState<TrafficLightColor>("red");
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (countdown === 0) return;
    

    const intervalId = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

  return () => {
    console.log('Cleanup effect');
    clearInterval(intervalId);
  };
  }, [countdown]);

  //Change light color effect
  useEffect(() => {
    if (countdown === 0) {
      if (light === "red") {
        setLight("green");
        setCountdown(5);
      } else if (light === "green") {
        setLight("yellow");
        setCountdown(2);
      } else if (light === "yellow") {
        setLight("red");
        setCountdown(5);
      }
    }
  }, [countdown, light]);
 

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-8">

        <h1 className="text-white text-3xl font-thin" >
          Semáforo con useEffect</h1>

        <h2 className="text-white text-xl"> Countdown {countdown}</h2>
        <div className="w-64 bg-gray-700 rounded-full h-2">
          <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${(countdown / 5) * 100}%` }}></div>
        </div>

        <div
          className={`w-32 h-32 ${
            light === "red" ? colors[light] : "bg-gray-500"
          }
             rounded-full`}
        ></div>

        <div
          className={`w-32 h-32 ${
            light === "yellow" ? colors[light] : "bg-gray-500"
          }
             rounded-full`}
        ></div>
        

        <div
          className={`w-32 h-32 ${
            light === "green" ? colors[light] : "bg-gray-500"
          }
             rounded-full`}
        ></div>        
      </div>
    </div>
  );
};
