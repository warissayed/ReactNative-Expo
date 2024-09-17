import { View, Text, Image } from "react-native";
import React from "react";

const ImageComponent = () => {
  return (
    <View>
      <Text>Let see the image</Text>
      <Image
        source={require("../assets/Image.jpg")}
        style={{ width: 450, height: 200 }}
      />
      <Image
        source={{ uri: "https://reactjs.org/logo-og.png" }}
        style={{ width: "auto", height: 200 }}
      />
    </View>
  );
};

export default ImageComponent;
