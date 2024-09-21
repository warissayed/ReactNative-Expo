import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const TodoList = () => {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);

  const addTodo = () => {
    if (text.trim()) {
      setTodo([...todo, { id: Date.now().toString(), text }]);
      setText("");
    }
  };
  const handleSubmit = () => {
    addTodo();
  };
  const renderTodo = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => removeTodo(item.id)}>
        <Text>{item.text}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <Text>TodoList</Text>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Add New Text"
        onSubmitEditing={handleSubmit}
        returnKeyLabel="Done"
      />
      <Button title="Add" onPress={addTodo} />

      <FlatList
        data={todo}
        keyExtractor={(item) => item.id}
        renderItem={renderTodo}
      />
    </View>
  );
};

export default TodoList;
