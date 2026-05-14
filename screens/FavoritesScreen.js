import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { MEALS } from '../data/dummy-data'
import { FavoritesContext } from '../context/FavoritesContext'
import MealItem from '../components/MealItem'

const FavoritesScreen = ({ navigation }) => {
  const { favoriteMealIds } = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter(meal => favoriteMealIds.includes(meal.id));

  function renderMealItem({ item }) {
    const pressHandler = () => {
      navigation.navigate('MealDetail', {
        mealId: item.id,
      });
    };

    return (
      <MealItem
        meal={item}
        onPress={pressHandler}
      />
    );
  }

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No favorite meals yet!</Text>
        <Text style={styles.emptySubtext}>Add meals to your favorites to see them here.</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={favoriteMeals}
      keyExtractor={(item) => item.id}
      renderItem={renderMealItem}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    backgroundColor: '#1a1a1a',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
  },
  emptyText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#aaa',
    textAlign: 'center',
  },
});

export default FavoritesScreen;
