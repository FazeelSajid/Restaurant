import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { Icon } from "react-native-paper";

const IconButton = ({ name, color, size, text, onpress }) => {
  return (
    <Pressable
      onPress={onpress}
      style={({ pressed }) => [
        text && styles.container,
        pressed && { opacity: 0.5 },
      ]}
    >
      {text && <Text style={{ color: "#351401" }}> {text} </Text>}
      <Icon size={size} color={color} source={name} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
    justifyContent: "center",
    backgroundColor: "#e2b497",
    width: "50%",
    padding: 10,
  },
});
