import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const CategoriesGridTile = ({ title, bgcolor, onPres }) => {
  return (
    <View style={[styles.container, { backgroundColor: bgcolor }]}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          { flex: 1 },
          pressed ? styles.Pressable : null,
        ]}
        onPress={onPres}
      >
        <View style={[styles.innerContainer]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoriesGridTile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 8,
    overflow: "hidden",
    // for ios
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 8,
  },
  Pressable: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    // fontSize: 18,
    fontWeight: "600",
  },
});
