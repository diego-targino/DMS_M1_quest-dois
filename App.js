import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [pressCount, setPressCount] = useState(0);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>You've pressed the button: {pressCount} time(s)</Text>
      <Pressable onPress={() => setPressCount(pressCount + 1)}>
        <Text style={styles.pressableText}>Press me </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 45,
    alignItems: "center",
  },
  pressableText: {
    color: "rgb(37, 150, 190)",
  },
});
