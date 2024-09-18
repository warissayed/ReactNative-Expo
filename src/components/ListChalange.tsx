import { View, Text, FlatList, Image } from "react-native";
import React from "react";

const ListChalange = () => {
  const product = [
    {
      id: 1,
      img: "../assets/Image.jpg",
      name: "Alice",
      rating: "Rating:3.5",
      price: "Price: 100",
    },
    {
      id: 2,
      img: "../assets/Image.jpg",
      name: "Bob",
      rating: "Rating:3.5",
      price: "Price: 100",
    },
    {
      id: 3,
      img: "../assets/Image.jpg",
      name: "Charlie",
      rating: "Rating:3.5",
      price: "Price: 100",
    },
    {
      id: 4,
      img: "../assets/Image.jpg",
      name: "David",
      rating: "Rating:3.5",
      price: "Price: 100",
    },
    {
      id: 5,
      img: "../assets/Image.jpg",
      name: "Eve",
      rating: "Rating:3.5",
      price: "Price: 100",
    },
    {
      id: 6,
      img: "../assets/Image.jpg",
      name: "Frank",
      rating: "Rating:3.5",
      price: "Price: 100",
    },
  ];
  // const renderItem = ({item}) => (
  //  return( <View>
  //     <Image source={{ uri: item.img }} />
  //     <Text>{item.name}</Text>
  //     <Text>{item.rating}</Text>
  //     <Text>{item.price}</Text>
  //   </View>)
  // );
  return (
    <View>
      <Text>ListChalange</Text>
      <FlatList
        data={product}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          return (
            <View>
              <Image source={{ uri: item.img }} />
              <Text>{item.name}</Text>
              <Text>{item.rating}</Text>
              <Text>{item.price}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ListChalange;
