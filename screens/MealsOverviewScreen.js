import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { MEALS, CATEGORIES } from '../data/dummy-data'
import MealItem from '../components/MealItem'
import { useNavigation } from '@react-navigation/native';

const MealsOverviewScreen = ({ route }) => {
  const { categoryId } = route.params;
  const navigation = useNavigation();

  const category = CATEGORIES.find(cat => cat.id === categoryId);
  const displayedMeals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));

  const renderMealItem = ({ item }) => (
    <MealItem 
      meal={item} 
      onPress={() => navigation.navigate('MealDetail', { mealId: item.id })}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No meals found</Text>
          </View>
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#999',
    fontWeight: '500',
  },
})

export default MealsOverviewScreen