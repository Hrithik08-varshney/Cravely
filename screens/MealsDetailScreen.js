import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { MEALS } from '../data/dummy-data'

const MealsDetailScreen = ({ route, navigation }) => {
  const { mealId } = route.params;
  const [imageError, setImageError] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  
  const meal = MEALS.find(m => m.id === mealId);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity 
          onPress={() => setIsFavorite(!isFavorite)}
          style={{ marginRight: 16 }}
        >
          <Text style={{ fontSize: 24 }}>{isFavorite ? '❤️' : '🤍'}</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation, isFavorite]);

  if (!meal) {
    return (
      <View style={styles.container}>
        <Text>Meal not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {/* Meal Image */}
      {imageError ? (
        <View style={[styles.mealImage, styles.fallbackImage]}>
          <Text style={styles.fallbackText}>🍽️</Text>
        </View>
      ) : (
        <Image
          source={{ uri: meal.imageUrl }}
          style={styles.mealImage}
          onError={() => setImageError(true)}
        />
      )}

      {/* Meal Info */}
      <View style={styles.infoContainer}>
        <Text style={styles.mealTitle}>{meal.title}</Text>

        {/* Duration, Complexity, Affordability */}
        <View style={styles.detailsRow}>
          <View style={styles.detailPill}>
            <Text style={styles.detailLabel}>Duration</Text>
            <Text style={styles.detailValue}>{meal.duration}m</Text>
          </View>
          <View style={styles.detailPill}>
            <Text style={styles.detailLabel}>Complexity</Text>
            <Text style={styles.detailValue}>{meal.complexity}</Text>
          </View>
          <View style={styles.detailPill}>
            <Text style={styles.detailLabel}>Cost</Text>
            <Text style={styles.detailValue}>{meal.affordability}</Text>
          </View>
        </View>

        {/* Dietary Badges */}
        <View style={styles.badgesContainer}>
          {meal.isGlutenFree && <View style={styles.badge}><Text style={styles.badgeText}>🌾 Gluten Free</Text></View>}
          {meal.isVegan && <View style={styles.badge}><Text style={styles.badgeText}>🥬 Vegan</Text></View>}
          {meal.isVegetarian && <View style={styles.badge}><Text style={styles.badgeText}>🥕 Vegetarian</Text></View>}
          {meal.isLactoseFree && <View style={styles.badge}><Text style={styles.badgeText}>🥛 Lactose Free</Text></View>}
        </View>

        {/* Ingredients Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ingredients</Text>
          {meal.ingredients.map((ingredient, index) => (
            <View key={index} style={styles.ingredientItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.ingredientText}>{ingredient}</Text>
            </View>
          ))}
        </View>

        {/* Steps Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Steps</Text>
          {meal.steps.map((step, index) => (
            <View key={index} style={styles.stepItem}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>{index + 1}</Text>
              </View>
              <Text style={styles.stepText}>{step}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mealImage: {
    width: '100%',
    height: 300,
  },
  fallbackImage: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  fallbackText: {
    fontSize: 80,
  },
  infoContainer: {
    padding: 16,
  },
  mealTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
    marginBottom: 16,
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  detailPill: {
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 4,
  },
  detailLabel: {
    fontSize: 11,
    color: '#999',
    fontWeight: '600',
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 14,
    fontWeight: '700',
    color: '#333',
  },
  badgesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 24,
    gap: 8,
  },
  badge: {
    backgroundColor: '#e8f5e9',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#2e7d32',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginBottom: 12,
  },
  ingredientItem: {
    flexDirection: 'row',
    marginBottom: 10,
    paddingLeft: 8,
  },
  bullet: {
    fontSize: 16,
    color: '#f5428d',
    marginRight: 12,
    fontWeight: '700',
  },
  ingredientText: {
    fontSize: 14,
    color: '#666',
    flex: 1,
  },
  stepItem: {
    flexDirection: 'row',
    marginBottom: 14,
  },
  stepNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#f5428d',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  stepNumberText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#fff',
  },
  stepText: {
    fontSize: 14,
    color: '#666',
    flex: 1,
    lineHeight: 20,
  },
})

export default MealsDetailScreen