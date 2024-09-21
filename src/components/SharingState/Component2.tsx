import { View, Text, Button } from "react-native";
import React from "react";

interface Props {
  count: number;
  onClickHandler: () => void;
}
const Component2 = ({ count, onClickHandler }: Props) => {
  return (
    <View>
      <Text>Component Two</Text>
      <Button title="Decrement" onPress={onClickHandler} />
    </View>
  );
};

export default Component2;
