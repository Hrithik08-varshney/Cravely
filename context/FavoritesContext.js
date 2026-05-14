import React, { createContext, useState } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  const addFavorite = (mealId) => {
    setFavoriteMealIds(prev => [...prev, mealId]);
  };

  const removeFavorite = (mealId) => {
    setFavoriteMealIds(prev => prev.filter(id => id !== mealId));
  };

  const toggleFavorite = (mealId) => {
    if (favoriteMealIds.includes(mealId)) {
      removeFavorite(mealId);
    } else {
      addFavorite(mealId);
    }
  };

  const isFavorite = (mealId) => {
    return favoriteMealIds.includes(mealId);
  };

  return (
    <FavoritesContext.Provider value={{ favoriteMealIds, addFavorite, removeFavorite, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
