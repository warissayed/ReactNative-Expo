import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Button,
} from "react-native";
import React, { useState } from "react";

const BgColorCHanger = () => {
  const [color, setColor] = useState("red"); // State for the background color
  const [inputValue, setInputValue] = useState(""); // State for the TextInput value

  // Function to change the background color when button is pressed
  const changeColor = () => {
    setColor(inputValue);
  };

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Text style={styles.text}>BgColorCHanger</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Color"
        value={inputValue} // Controlled input value
        onChangeText={(text) => setInputValue(text)} // Update input value as user types
      />
      <Button title="Change Color" onPress={changeColor} />{" "}
      {/* Button to change the background color */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: Dimensions.get("window").height,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: 200,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: "white", // Input field background for visibility
    marginBottom: 20,
  },
});

export default BgColorCHanger;
