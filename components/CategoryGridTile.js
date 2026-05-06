import { View, Text, Pressable } from "react-native";
import React from "react";

const CategoryGridTile = ({ title, color }) => {
  return (
    <View>
      <Pressable>
        <View style={{ backgroundColor: color }}>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;
