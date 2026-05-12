import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import { CATEGORIES, MEALS } from "./data/dummy-data";
import MealsDetailScreen from "./screens/MealsDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />

      <NavigationContainer>
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
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
