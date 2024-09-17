import { View, Text } from "react-native";
import React from "react";

const dainamicComponent = () => {
  const username = "waris sayed";
  const multiply = (a: number, b: number) => a * b;
  return (
    <View>
      <Text>dainamicComponent {username}</Text>
      <Text>2* 2 = {multiply(2, 2)}</Text>
      <Text>{1064065 + 560680}</Text>
    </View>
  );
};

export default dainamicComponent;
