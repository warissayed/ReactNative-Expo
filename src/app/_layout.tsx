import { View, Text } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";
import Test from "../components/Test";

const layout = () => {
  return (
    <View>
      <Text>Hello WOrld</Text>
      <Slot />
    </View>
  );
};

export default layout;
