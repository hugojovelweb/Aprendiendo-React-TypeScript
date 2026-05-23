import { useEffect, useState } from "react";

const colors = {
  red: "bg-red-500 animated-pulse",
  yellow: "bg-yellow-500 animated-pulse",
  green: "bg-green-500 animated-pulse",
};

type TrafficLightColor = keyof typeof colors;

export const useTrafficLight = () => {


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

    return {
        countdown,
        light,
        colors,
    };


}