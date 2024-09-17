import { View, Text, Image, Button } from "react-native";
import React from "react";

const Exersise = () => {
  const price = "$200,000";
  const size = 200;
  const carName = "Lamborghini";
  const carModel = "Aventador";
  return (
    <View>
      <Text>{price}</Text>
      <Image
        source={require("../assets/Image.jpg")}
        style={{ height: size, width: size }}
      />
      <Text>{carName}</Text>
      <Text>{carModel}</Text>
      <Button title="Add TO Cart" />
      <Button title="click" onPress={() => alert("pressed")} />
    </View>
  );
};

export default Exersise;
