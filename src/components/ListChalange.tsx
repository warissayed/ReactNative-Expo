import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import React from "react";

interface Product {
  id: number;
  img: string;
  name: string;
  rating: string;
  price: string;
}
const ListChalange = () => {
  const product = [
    {
      id: 1,
      img: "https://picsum.photos/200/300?random=1",
      name: "Alice",
      rating: "Rating:3.5",
      price: "Price: 100",
    },
    {
      id: 2,
      img: "https://picsum.photos/200/300?random=2",
      name: "Bob",
      rating: "Rating:3.5",
      price: "Price: 100",
    },
    {
      id: 3,
      img: "https://picsum.photos/200/300?random=3",
      name: "Charlie",
      rating: "Rating:3.5",
      price: "Price: 100",
    },
    {
      id: 4,
      img: "https://picsum.photos/200/300?random=4",
      name: "David",
      rating: "Rating:3.5",
      price: "Price: 100",
    },
    {
      id: 5,
      img: "https://picsum.photos/200/300?random=5",
      name: "Eve",
      rating: "Rating:3.5",
      price: "Price: 100",
    },
    {
      id: 6,
      img: "https://picsum.photos/200/300?random=6",
      name: "Frank",
      rating: "Rating:3.5",
      price: "Price: 100",
    },
  ];
  const renderItem = ({ item }: { item: Product }) => (
    <View style={style.ProductContainer}>
      <Image style={style.image} source={{ uri: item.img }} />
      <Text style={style.name}>{item.name}</Text>
      <Text style={style.rating}>{item.rating}</Text>
      <Text style={style.price}>{item.price}</Text>
    </View>
  );
  return (
    <View>
      <FlatList
        data={product}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ListChalange;

const style = StyleSheet.create({
  ProductContainer: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  image: {
    width: 200,
    height: 300,
    borderRadius: 20,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  rating: {
    fontSize: 14,
    color: "#888",
    marginBottom: 5,
  },
  price: {
    fontSize: 19,
    backgroundColor: "black",
    color: "white",
    width: 100,
    textAlign: "center",
    borderRadius: 5,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
