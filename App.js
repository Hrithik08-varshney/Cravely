import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import { CATEGORIES, MEALS } from "./data/dummy-data";
import MealsDetailScreen from "./screens/MealsDetailScreen";
import { FavoritesProvider } from "./context/FavoritesContext";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function CategoriesStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "Cravely",
          headerStyle: { backgroundColor: "#1a1a1a" },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="MealsOverview"
        component={MealsOverviewScreen}
        options={({ route }) => {
          const categoryId = route.params?.categoryId;
          const category = CATEGORIES.find(cat => cat.id === categoryId);
          return {
            title: category?.title || "Meals",
            headerStyle: { backgroundColor: "#1a1a1a" },
            headerTintColor: "#fff",
            headerTitleAlign: "center",
          };
        }}
      />
      <Stack.Screen
        name="MealDetail"
        component={MealsDetailScreen}
        options={({ route }) => {
          const mealId = route.params?.mealId;
          const meal = MEALS.find(m => m.id === mealId);
          return {
            title: meal?.title || "Meal Details",
            headerStyle: { backgroundColor: "#1a1a1a" },
            headerTintColor: "#fff",
            headerTitleAlign: "center",
          };
        }}
      />
    </Stack.Navigator>
  );
}

function FavoritesStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FavoritesList"
        component={FavoritesScreen}
        options={{
          title: "My Favorites",
          headerStyle: { backgroundColor: "#1a1a1a" },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="MealDetail"
        component={MealsDetailScreen}
        options={({ route }) => {
          const mealId = route.params?.mealId;
          const meal = MEALS.find(m => m.id === mealId);
          return {
            title: meal?.title || "Meal Details",
            headerStyle: { backgroundColor: "#1a1a1a" },
            headerTintColor: "#fff",
            headerTitleAlign: "center",
          };
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <FavoritesProvider>
      <>
        <StatusBar style="dark" />

        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
              tabBarStyle: {
                backgroundColor: "#1a1a1a",
                borderTopColor: "#333",
                borderTopWidth: 1,
              },
              tabBarActiveTintColor: "#f5428d",
              tabBarInactiveTintColor: "#888",
            }}
          >
            <Tab.Screen
              name="Home"
              component={CategoriesStackNavigator}
              options={{
                tabBarLabel: "Categories",
                tabBarIcon: ({ color }) => <Text style={{ fontSize: 20, color }}>🍽️</Text>,
              }}
            />
            <Tab.Screen
              name="Favorites"
              component={FavoritesStackNavigator}
              options={{
                tabBarLabel: "Favorites",
                tabBarIcon: ({ color }) => <Text style={{ fontSize: 20, color }}>❤️</Text>,
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </>
    </FavoritesProvider>
  );
}

const styles = StyleSheet.create({
  container: {},
});
