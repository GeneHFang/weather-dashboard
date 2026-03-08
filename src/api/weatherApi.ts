import axios from "axios";
import type { CurrentWeather, ForecastData } from "../types/weather";

const BASE_URL = "https://api.openweathermap.org/data/2.5";
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const fetchCurrentWeather = async (
  city: string,
  units: "metric" | "imperial"
): Promise<CurrentWeather> => {
  const response = await axios.get<CurrentWeather>(`${BASE_URL}/weather`, {
    params: {
      q: city,
      appid: API_KEY,
      units,
    },
  });
  return response.data;
};

export const fetchForecast = async (
  city: string,
  units: "metric" | "imperial"
): Promise<ForecastData> => {
  const response = await axios.get<ForecastData>(`${BASE_URL}/forecast`, {
    params: {
      q: city,
      appid: API_KEY,
      units,
    },
  });
  return response.data;
};