import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Subtitle = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "white",
    marginHorizontal: 40,
    marginVertical: 4,
    paddingBottom: 4,
  },
  text: {
    fontWeight: "bold",
    fontSize: 17,
    color: "#e2b497",
  },
});
