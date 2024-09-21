import { View, Text } from "react-native";
import React from "react";
import Component1 from "./Component1";
import Component2 from "./Component2";

const SharingState = () => {
  const [count, setCount] = React.useState(0);
  return (
    <View>
      <Text style={{ fontSize: 30, textAlign: "center" }}>{count}</Text>
      <Component1 count={count} onClickHandler={() => setCount(count + 1)} />
      <Component2 count={count} onClickHandler={() => setCount(count - 1)} />
    </View>
  );
};

export default SharingState;
