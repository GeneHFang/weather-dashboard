export interface Coordinates {
    lat: number;
    lon: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface MainStats {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface Wind {
  speed: number;
  deg: number;
}

//response
export interface CurrentWeather {
  name: string;
  visibility: number;
  weather: Weather[];
  coord: Coordinates; 
  main: MainStats;
  wind: Wind;
  clouds: { all: number };
  sys: { country: string };
  dt: number;
}

//pop = snow/rain chance (Probability of Percipitation) 
export interface ForecastItem {
  dt: number;
  main: MainStats;
  weather: Weather[];
  wind: Wind;
  pop: number;
  clouds: { all: number };
}

export interface ForecastData {
  list: ForecastItem[];
  city: {
    name: string;
    country: string;
  };
}