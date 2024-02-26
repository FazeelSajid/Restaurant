import { FlatList, StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import React from "react";
import { MEALS } from "../data/dummy-data";
import { CATEGORIES } from "../data/dummy-data";
import MealsList from "../Components/MealList/MealsList";
const MealsOverViewScreen = ({ route, navigation }) => {
  // let route = useRoute();
  let categoryId = route.params.id;
  // console.log(categoryId);
  let screenTitle = CATEGORIES.find((item) => item.id === categoryId).title;

  useEffect(() => {
    navigation.setOptions({
      title: screenTitle,
    });
  }, [categoryId, navigation]);

  let displayMealList = MEALS.filter((item) => {
    // console.log(MEALS[1]);
    if (item.categoryIds.indexOf(categoryId) >= 0) {
      return true;
    } else {
      return false;
    }
  });

  return <MealsList mealsList={displayMealList} />;
};

export default MealsOverViewScreen;

const styles = StyleSheet.create({
  container: {
    // width: '100%',
    flex: 1,
    padding: 16,
    // alignItems: 'center'
  },
});
