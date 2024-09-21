import { View, Text, Button, TextInput } from "react-native";
import React, { useState } from "react";

const WeatherData: { [key: string]: string } = {
  London: "20°C, Clear",
  Paris: "18°C, Cloudy",
  Tokyo: "25°C, Sunny",
  NewYork: "15°C, Rainy",
};

const WeatherApp = () => {
  // State hooks inside the component with proper types
  const [city, setCity] = useState<string>("");
  const [weather, setWeather] = useState<string>("");

  const getWeather = () => {
    setWeather(WeatherData[city] || "No data available");
  };

  return (
    <View>
      <Text>WeatherApp</Text>
      <TextInput
        placeholder="Enter City"
        value={city}
        onChangeText={setCity} // No need for additional typing, React infers the type
      />
      <Button title="Get Weather" onPress={getWeather} />
      {weather ? <Text>{weather}</Text> : null}
    </View>
  );
};

export default WeatherApp;
