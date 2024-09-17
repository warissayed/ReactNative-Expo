import { View, Text, Button } from "react-native";
import React from "react";

const AddButton = () => {
  return (
    <View>
      <Text>AddButton</Text>
      <Button
        title="Edit me "
        color="#f194ff"
        onPress={() => alert("You click me ")}
      />
      <Button title="Example"></Button>
    </View>
  );
};

export default AddButton;
