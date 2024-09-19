import { View, Text } from "react-native";
import React from "react";
import ChildComponent from "./ChildComponent";

const ParebtComponent = () => {
  return (
    <View>
      <Text>Parebt Component</Text>

      <ChildComponent
        name="Random Person"
        age={69}
        hobbies={["bedu", "oneMoreBedu", "Last bedu"]}
      />
    </View>
  );
};

export default ParebtComponent;
