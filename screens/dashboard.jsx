import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>👋 Hello from your Dashboard!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3f4f6", // light gray background
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4f46e5", // indigo shade
  },
});
