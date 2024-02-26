import { StyleSheet, View, FlatList } from "react-native";
import React from "react";
import MealItem from "./MealItem";
import { useNavigation } from "@react-navigation/native";

const MealsList = ({ mealsList }) => {
  let navigation = useNavigation();

  let renderfunc = (item) => {
    let mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      affordability: item.affordability,
      complexity: item.complexity,
    };

    let onPress = () => {
      navigation.navigate("MealsDetailScreen", { id: mealItemProps.id });
    };
    return <MealItem {...mealItemProps} onpress={onPress} />;
  };
  return (
    <View style={styles.container}>
      {/* <Text>MealsOverViewScreen -- {categoryId}</Text> */}

      <FlatList
        data={mealsList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => renderfunc(item)}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({});
