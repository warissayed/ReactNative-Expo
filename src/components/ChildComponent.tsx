import { View, Text } from "react-native";
import React from "react";
interface Props {
  name: string;
  age: number;
  hobbies: string[];
}
const ChildComponent = (props: Props) => {
  console.log(props);
  return (
    <View>
      <Text>Name:{props.name}</Text>
      <Text>Age:{props.age}</Text>
      <Text>{props.hobbies[0]}</Text>
      <Text>{props.hobbies[1]}</Text>
      <Text>{props.hobbies[2]}</Text>
    </View>
  );
};

export default ChildComponent;
