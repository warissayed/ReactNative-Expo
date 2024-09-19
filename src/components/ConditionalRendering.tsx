import { View, Text } from "react-native";
import React from "react";

// Define the types for the Password component props
interface PasswordProps {
  isvalid: boolean;
}

const ConditionalRendering = () => {
  const ValidUser = () => {
    return <Text>Valid User</Text>;
  };

  const InvalidUser = () => {
    return <Text>Invalid User</Text>;
  };

  // Add the props type to the Password component
  // const Password: React.FC<PasswordProps> = ({ isvalid }) => {
  //   if (isvalid) {
  //     return <ValidUser />;
  //   } else {
  //     return <InvalidUser />;
  //   }
  // };
  const Password: React.FC<PasswordProps> = ({ isvalid }) => {
    return isvalid ? <ValidUser /> : <InvalidUser />;
  };

  return (
    <View>
      <Text>ConditionalRendering</Text>
      <Password isvalid={true} />
    </View>
  );
};

export default ConditionalRendering;
