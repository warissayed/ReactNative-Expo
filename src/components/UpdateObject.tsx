import { View, Text, Button } from "react-native";
import React, { useState } from "react";

const UpdateObject = () => {
  const [movie, SetMovie] = useState({
    tittle: "OMG 2",
    Rating: 3,
  });
  return (
    <View>
      <Text>{movie.tittle}</Text>
      <Text>{movie.Rating}</Text>
      <Button
        title="Update"
        onPress={() => SetMovie({ ...movie, Rating: 5 })}
      />
    </View>
  );
};

export default UpdateObject;
