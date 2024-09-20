import { View, Text, FlatList, Button } from "react-native";
import React from "react";

const AddingFriends = () => {
  const [friend, setFriend] = React.useState([
    "Alex",
    "Jon",
    "Jen",
    "Mike",
    "John",
  ]);

  function addFriend() {
    setFriend([...friend, "Abdul Bhai"]);
  }

  function removeFriend(name: string) {
    setFriend(friend.filter((f) => f !== name));
  }
  function updateFriend() {
    setFriend(friend.map((f) => (f === "Mike" ? "Mike Updated" : f)));
  }

  return (
    <View>
      <Text>Adding Friends</Text>
      <FlatList data={friend} renderItem={({ item }) => <Text>{item}</Text>} />
      <Button title="Add Friend" onPress={addFriend} />
      <Button title="Remove Mike" onPress={() => removeFriend("Mike")} />
      <Button
        title="Remove Abdul Bhai"
        onPress={() => removeFriend("Abdul Bhai")}
      />
      <Button title="Update Mike" onPress={updateFriend} />
    </View>
  );
};

export default AddingFriends;
