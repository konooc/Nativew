import { React, useEffect, useState } from "react";
import { FlatList, Text } from "react-native";
import cupones from "../data/cupones";
import CuponItems from "./CuponItems";

const Cuponeslist = () => {
  const [allCupons, setAllCupons] = useState();

  useEffect(() => {
    // Update the document title using the browser API
    fetchAllCupons();
  }, []);

  const fetchAllCupons = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products?limit=10");
      const jsonData = await response.json();
      setAllCupons(jsonData.products);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <FlatList
      data={allCupons}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item: cupo }) => <CuponItems {...cupo} />}
    />
  );
};

export default Cuponeslist;
