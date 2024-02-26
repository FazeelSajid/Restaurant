import { StyleSheet, Text, View, Image, SectionList } from "react-native";
import React, { useContext, useLayoutEffect } from "react";

import IconButton from "../Components/IconButton";
import { MEALS } from "../data/dummy-data";
import MealDetail from "../Components/MealDetail";
import Subtitle from "../Components/Subtitle";
import List from "../Components/List";
import { FavouriteContext } from "../Store/Context/Context";
// import {AddToCart} from "../Components/Redux/Action";
// import { RemoveToCart } from "../Components/Redux/Action";
// import { useDispatch, useSelector } from "react-redux";
// import { UseSelector } from "react-redux";

const MealsDetailScreen = ({ route, navigation }) => {
  let mealId = route.params.id;
  let selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const sections = [
    {
      title: "Ingredients",
      data: selectedMeal.ingredients,
    },
    {
      title: "Steps",
      data: selectedMeal.steps,
    },
    {
      title: "Endpoint",
      data: [],
    },
  ];

  let { removeFavouritesids, ids, addtoFavouritesids } =
    useContext(FavouriteContext);

  let FavouriteHandler = () => {
    if (ids.includes(mealId) === false) {
      addtoFavouritesids(mealId);
    } else {
      removeFavouritesids(mealId);
    }
  };

  let Isfavourite = ids.includes(mealId);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            name={Isfavourite ? "heart" : "heart-outline"}
            size={24}
            color={"white"}
            onpress={FavouriteHandler}
          />
        );
      },
    });
  });

  // const cartItem = useSelector((state) => state.reducer)
  // console.log(cartItem);

  // let dispatch = useDispatch()

  // let handlerAddToCart = (item) => {
  //   console.warn("Add To Cart Pressed", item);
  //   dispatch(AddToCart(item))
  //   console.log(cartItem);

  // };

  // let handlerRemoveToCart = (item) => {
  //   // console.warn("Remove From Cart Pressed", item);
  //       dispatch(RemoveToCart (item))
  // };

  return (
    <SectionList
      sections={sections}
      style={{ paddingBottom: 30 }}
      keyExtractor={(item, index) => index.toString()}
      renderSectionHeader={({ section }) => (
        <Subtitle>{section.title}</Subtitle>
      )}
      renderItem={({ item }) => <List data={item} />}
      ListHeaderComponent={
        <>
          <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
          <Text style={styles.title}>{selectedMeal.title}</Text>
          <MealDetail
            textStyle={styles.detailText}
            duration={selectedMeal.duration}
            affordability={selectedMeal.affordability}
            complexity={selectedMeal.complexity}
          />
        </>
      }
      ListFooterComponent={
        <View style={{ alignItems: "center" }}>
          <IconButton
            // onpress={()=> handlerAddToCart(selectedMeal.title)}
            name={"cart-outline"}
            size={25}
            color={"#351401"}
            text={"Add To Cart"}
          />
          <IconButton
            // onpress={()=> handlerRemoveToCart(selectedMeal.id)}
            name={"cart-outline"}
            size={25}
            color={"#351401"}
            text={"Remove From Cart"}
          />
        </View>
      }
    />
  );
};

export default MealsDetailScreen;

const styles = StyleSheet.create({
  image: {
    height: 350,
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
    color: "#FFFFFF",
  },
  detailText: {
    color: "#FFFFFF",
    fontSize: 15,
  },
});
