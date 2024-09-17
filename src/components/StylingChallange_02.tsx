import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import React from "react";
import styling from "../utils/style";

const StylingChallange_02 = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/Image.jpg")} />
      <Text style={styles.BoltText}> Just Ali </Text>
      <Text style={styles.text}>My Name is just ALI i love coding </Text>
      <Pressable style={styles.button} onPress={() => alert("ok")}>
        <Text>Press Me</Text>
      </Pressable>
    </View>
  );
};

export default StylingChallange_02;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  BoltText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "red",
  },
  text: {
    fontSize: 20,
    color: "green",
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
});
