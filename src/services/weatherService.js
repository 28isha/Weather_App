const API_KEY = "e2cb1bd3f1d64b9e832230246231306";
const BASE_URL = "http://api.weatherapi.com/v1";

export const getWeatherData = async (city) => {
  const data = await fetch(
    `${BASE_URL}/current.json?key=${API_KEY}&q=${city}`
  ).then((res) => res.json());
  return data;
};

const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;
  const { main: details, icon } = weather[0];
  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    weather,
    speed,
  };
};

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather);
};
