import { View, Text, Button } from "react-native";
import React from "react";

interface Props {
  count: number;
  onClickHandler: () => void;
}

const Component1 = ({ count, onClickHandler }: Props) => {
  return (
    <View>
      <Text>Component One</Text>
      <Button title="Increment" onPress={onClickHandler} />
    </View>
  );
};

export default Component1;
