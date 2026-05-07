import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { MEALS } from '../data/dummy-data'
import MealItem from '../components/MealItem'

const MealsOverviewScreen = ({ route }) => {
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));

  const renderMealItem = ({ item }) => {
    return <MealItem meal={item} onPress={() => {
      // Handle meal item press - can navigate to meal detail screen
    }} />
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Text style={{ fontSize: 20, fontWeight: '700', padding: 16 }}>Meals</Text>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  )
}

export default MealsOverviewScreen