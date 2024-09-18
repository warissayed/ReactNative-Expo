import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";

const ListData = () => {
  const names = ["Alice", "Bob", "Charlie", "David"];
  return (
    <View>
      <Text>ListData</Text>
      <FlatList
        data={names}
        renderItem={({ item }) => {
          return <Text style={styles.text}>{item}</Text>;
        }}
      />
    </View>
  );
};

export default ListData;

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "red",
  },
});
