import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

const List = ({ data }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <View style={{ width: "80%" }}>
        <View style={styles.container}>
          <Text style={styles.text}>{data}</Text>
        </View>
      </View>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  SectionListContainer: {
    width: "80%",
  },
  container: {
    backgroundColor: "#e2b497",
    // marginBottom: 5,
    borderRadius: 5,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginHorizontal: 12,
    marginVertical: 4,
  },
  text: {
    textAlign: "center",
    color: "#351401",
  },
});
