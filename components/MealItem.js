import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const MealItem = ({ meal, onPress }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <TouchableOpacity style={styles.mealContainer} onPress={onPress}>
      {imageError ? (
        <View style={[styles.image, styles.fallbackImage]}>
          <Text style={styles.fallbackText}>🍽️</Text>
          <Text style={styles.fallbackLabel}>No Image</Text>
        </View>
      ) : (
        <Image 
          source={{ uri: meal.imageUrl }} 
          style={styles.image}
          onError={() => setImageError(true)}
        />
      )}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{meal.title}</Text>
        
        <View style={styles.infoRow}>
          <View style={styles.infoPill}>
            <Text style={styles.infoLabel}>Duration</Text>
            <Text style={styles.infoValue}>{meal.duration}m</Text>
          </View>
          <View style={styles.infoPill}>
            <Text style={styles.infoLabel}>Complexity</Text>
            <Text style={styles.infoValue}>{meal.complexity}</Text>
          </View>
          <View style={styles.infoPill}>
            <Text style={styles.infoLabel}>Cost</Text>
            <Text style={styles.infoValue}>{meal.affordability}</Text>
          </View>
        </View>

        <View style={styles.badgesContainer}>
          {meal.isGlutenFree && <View style={styles.badge}><Text style={styles.badgeText}>🌾 Gluten Free</Text></View>}
          {meal.isVegan && <View style={styles.badge}><Text style={styles.badgeText}>🥬 Vegan</Text></View>}
          {meal.isVegetarian && <View style={styles.badge}><Text style={styles.badgeText}>🥕 Vegetarian</Text></View>}
          {meal.isLactoseFree && <View style={styles.badge}><Text style={styles.badgeText}>🥛 Lactose Free</Text></View>}
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  mealContainer: {
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
  },
  fallbackImage: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  fallbackText: {
    fontSize: 48,
    marginBottom: 8,
  },
  fallbackLabel: {
    fontSize: 14,
    color: '#999',
    fontWeight: '600',
  },
  contentContainer: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginBottom: 12,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 12,
  },
  infoPill: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  infoLabel: {
    fontSize: 11,
    color: '#666',
    fontWeight: '600',
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 13,
    fontWeight: '700',
    color: '#333',
  },
  badgesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  badge: {
    backgroundColor: '#e8f5e9',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginBottom: 4,
  },
  badgeText: {
    fontSize: 11,
    color: '#2e7d32',
    fontWeight: '600',
  },
})

export default MealItem
