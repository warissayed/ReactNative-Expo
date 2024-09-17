import { View, Text, Pressable } from "react-native";
import React from "react";

const AddPressable = () => {
  return (
    <View>
      <Pressable onPress={() => console.log("pressed ")}>
        <Text>This is the test you don't have to press</Text>
      </Pressable>
      <Pressable onPressIn={() => console.log("pressed ")}>
        <Text>On press in </Text>
      </Pressable>
      <Pressable onPressOut={() => console.log("pressed out ")}>
        <Text>On Press out </Text>
      </Pressable>
      <Pressable onLongPress={() => console.log("Long press ")}>
        <Text>THis is long press</Text>
      </Pressable>
    </View>
  );
};

export default AddPressable;
