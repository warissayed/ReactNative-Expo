import { View, Text, Image, Button } from "react-native";
import React from "react";

const PressTHis = () => {
  return (
    <View>
      <Text>PressTHis</Text>
      <Image
        source={require("../assets/Image.jpg")}
        style={{ width: 200, height: 200 }}
      />
      <Text>Waris sayed</Text>
      <Text>This is text</Text>
      <Button title="Press Me" />
    </View>
  );
};

export default PressTHis;
