import { View, Text, FlatList } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = ({ navigation }) => {
  function renderCategoryItem({ item }) {
    const pressHandler = () => {
      navigation.navigate("MealsOverview", {
        categoryId: item.id,
      });
    };
    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = {
  listContainer: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    backgroundColor: "#1a1a1a",
  },
};

export default CategoriesScreen;
