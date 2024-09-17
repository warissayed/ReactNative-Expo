import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Styling = () => {
  return (
    <View>
      <Text style={styles.text}>Styling</Text>
    </View>
  );
};

export default Styling;

const styles = StyleSheet.create({
  text: {
    color: "red",
    fontSize: 30,
    backgroundColor: "black",
    margin: 20,
    padding: 20,
    borderRadius: 10,
    textTransform: "uppercase",
    textAlign: "center",
    fontWeight: "bold",
    letterSpacing: 10,
    lineHeight: 100,
  },
});
