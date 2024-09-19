import { View, Text, FlatList } from "react-native";
import React from "react";

const ANDOprator = () => {
  const groceries = ["milk", "eggs", "bread"];
  return (
    <View>
      <Text>Cart🛒</Text>
      {groceries.length > 0 && (
        <Text>There are {groceries.length} items in the cart</Text>
      )}
      <FlatList
        data={groceries}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </View>
  );
};

export default ANDOprator;
