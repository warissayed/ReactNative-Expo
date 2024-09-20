import { View, Text, Button } from "react-native";
import React from "react";

const UseState = () => {
  const [count, setCount] = React.useState(0);
  return (
    <View>
      <Text style={{ fontSize: 40, fontWeight: "bold", textAlign: "center" }}>
        {count}
      </Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
      <Button title="Decrement" onPress={() => setCount(count - 1)} />
      <Button title="Reset" onPress={() => setCount(0)} />
      <Button title="DubbleIncrement" onPress={() => setCount(count + 2)} />
    </View>
  );
};

export default UseState;
