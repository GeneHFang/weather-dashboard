export default function App() {
  return <div>Weather Dashboard</div>
}


//API call test
/*
import { useEffect } from "react";
import { fetchCurrentWeather, fetchForecast } from "./api/weatherApi";

export default function App() {
  useEffect(() => {
    const test = async () => {
      try {
        const current = await fetchCurrentWeather("London", "metric");
        const forecast = await fetchForecast("London", "metric");
        console.log("Current:", current);
        console.log("Forecast:", forecast);
      } catch (error) {
        console.error("API Error:", error);
      }
    };
    test();
  }, []);

  return <div>Check the console</div>;
}
  */