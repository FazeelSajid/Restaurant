import { StyleSheet, Text, View } from "react-native";
import MealsList from "../Components/MealList/MealsList";
import React from "react";
import { useContext } from "react";
import { FavouriteContext } from "../Store/Context/Context";
import { MEALS } from "../data/dummy-data";

const Favorites = () => {
  let { ids } = useContext(FavouriteContext);

  let FavouriteMealsList = MEALS.filter((item) => ids.includes(item.id));

  if (FavouriteMealsList.length === 0) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ color: "white", fontSize: 18, fontWeight: "700" }}>
          {" "}
          You Have No Favorite Meals Yet{" "}
        </Text>
      </View>
    );
  }
  return <MealsList mealsList={FavouriteMealsList} />;
};

export default Favorites;

const styles = StyleSheet.create({});
