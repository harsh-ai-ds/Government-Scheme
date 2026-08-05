import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, Avatar } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

export default function Header() {
  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 17) {
    greeting = "Good Afternoon";
  }

  return (
    <LinearGradient
      colors={["#0D47A1", "#1976D2", "#42A5F5"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.row}>
        <View>
          <Text style={styles.greeting}>
            {greeting}
          </Text>

          <Text style={styles.name}>
            Harshad 👋
          </Text>

          <Text style={styles.subtitle}>
            Government Scheme Assistant
          </Text>
        </View>

        <Avatar.Text
          size={52}
          label="H"
          style={styles.avatar}
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingBottom: 28,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  greeting: {
    color: "#E3F2FD",
    fontSize: 16,
  },

  name: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 4,
  },

  subtitle: {
    color: "#E3F2FD",
    marginTop: 6,
    fontSize: 14,
  },

  avatar: {
    backgroundColor: "#FFFFFF",
  },
});