import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";

const StylingChallange_03 = () => {
  return (
    <View>
      <Text style={styles.textBg}>$200,000</Text>
      <Image style={styles.image} source={require("../assets/Image.jpg")} />
      <View style={styles.innerContainer}>
        <Text style={styles.lgtext}>Car Name </Text>
        <Text style={styles.text}>Rating:3.5 </Text>
      </View>
      <Text style={styles.text}>Here is some the red car</Text>
      <Pressable style={styles.button}>
        <Text style={styles.btnText}>View Details</Text>
      </Pressable>
    </View>
  );
};

export default StylingChallange_03;

const styles = StyleSheet.create({
  textBg: {
    backgroundColor: "black",
    marginLeft: 10,
    fontSize: 15,
    color: "white",
    padding: 10,
    fontWeight: "bold",
    width: "30%",
    borderRadius: 10,
    justifyContent: "center",
    textAlign: "center",
  },
  lgtext: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  image: {
    width: 400,
    height: 400,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    backgroundColor: "black",

    padding: 10,
    borderRadius: 10,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "70%",
    height: 50,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: "center",
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
});
