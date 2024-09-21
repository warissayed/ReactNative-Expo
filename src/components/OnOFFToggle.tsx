import { View, Text, Button } from "react-native";
import React from "react";

const OnOFFToggle = () => {
  const [isOn, setIsOn] = React.useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <View>
      <Text style={{ textAlign: "center", fontSize: 30 }}>
        {isOn ? "ON" : "OFF"}
      </Text>
      <Button title="Toggle" onPress={toggleSwitch} />
    </View>
  );
};

export default OnOFFToggle;
