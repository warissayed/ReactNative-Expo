import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import styling from "../utils/style";

const ArrayOfObject = () => {
  const names = [
    {
      id: 1,
      name: "Alice",
    },
    {
      id: 2,
      name: "Bob",
    },
    {
      id: 3,
      name: "Charlie",
    },
    {
      id: 4,
      name: "David",
    },
    {
      id: 5,
      name: "Eve",
    },
    {
      id: 6,
      name: "Frank",
    },
  ];
  return (
    <View>
      <Text>ArrayOfObject</Text>
      <FlatList
        data={names}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return <Text style={styles.text}>{item.name}</Text>;
        }}
      />
    </View>
  );
};

export default ArrayOfObject;

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "green",
  },
});
