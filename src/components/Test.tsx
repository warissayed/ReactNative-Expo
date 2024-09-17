import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Test = () => {
  return (
    <View>
      <Text style={styles.text}>Kya hai bhai </Text>
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({
  // container: {
  //   display: "flex",
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  text: {
    color: "red",
    fontSize: 30,
  },
});
