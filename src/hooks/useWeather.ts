import { useState } from "react";
import type { CurrentWeather, ForecastData } from "../types/weather";
import { fetchCurrentWeather, fetchForecast } from "../api/weatherApi";

type Units = "metric" | "imperial";

interface WeatherState {
  current: CurrentWeather | null;
  forecast: ForecastData | null;
  loading: boolean;
  error: string;
  city: string;
  units: Units;
}

export const useWeather = () => {
  const [state, setState] = useState<WeatherState>({
    current: null,
    forecast: null,
    loading: false,
    error: "",
    city: "",
    units: "metric",
  });

  const fetchWeather = async (city: string, units: Units) => {
    setState((prev) => ({ ...prev, loading: true, error: "" }));
    try {
      const [current, forecast] = await Promise.all([
        fetchCurrentWeather(city, units),
        fetchForecast(city, units),
      ]);
      setState((prev) => ({
        ...prev,
        current,
        forecast,
        city,
        loading: false,
      }));
    } catch (e: unknown) {
      const message =
        e instanceof Error ? e.message : "Something went wrong.";
      setState((prev) => ({
        ...prev,
        error: message,
        current: null,
        forecast: null,
        loading: false,
      }));
    }
  };

  const toggleUnits = () => {
    const next: Units = state.units === "metric" ? "imperial" : "metric";
    setState((prev) => ({ ...prev, units: next }));
    if (state.city) fetchWeather(state.city, next);
  };

  return { ...state, fetchWeather, toggleUnits };
};