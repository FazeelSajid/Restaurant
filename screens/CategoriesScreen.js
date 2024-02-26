import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Category from "../models/category";
import CategoriesGridTile from "../Components/CategoriesGridTile";
import { CATEGORIES } from "../data/dummy-data";
import IconButton from "../Components/IconButton";
import { useLayoutEffect } from "react";

const CategoriesScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            name={"heart"}
            size={40}
            color={"#e2b497"}
            onpress={() => navigation.navigate("FavouritesScreen")}
          />
        );
      },
    });
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        numColumns={2}
        renderItem={({ item }) => {
          let onPress = (itemCategoryId) => {
            navigation.navigate("MealsOverView", { id: itemCategoryId });
            // console.log('current: ', itemCategoryId);
          };
          return (
            <View style={styles.gridContainer}>
              <CategoriesGridTile
                title={item.title}
                bgcolor={item.color}
                onPres={onPress.bind(this, item.id)}
              />
            </View>
          );
        }}
      />

      <Text> </Text>
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gridContainer: {
    flex: 1,
  },
});
